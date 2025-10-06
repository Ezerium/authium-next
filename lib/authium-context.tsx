"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";
import axios from "axios";
import { useStorage } from "./storage";
import { decrypt, encrypt } from "./encryption";
import { AuthiumConfig, User } from "./types";

const DAEMON_ENDPOINT = "https://api.authium.ezerium.com/v1";

interface AuthiumContextValue {
    user: User | null;
    isLoggedIn: boolean;
    loading: boolean;
    error: string | null;
    signIn: (expiryOverride?: number) => void;
    signOut: () => void;
    refresh: () => Promise<void>;
    save: (access: string, refresh: string, expiry: number) => void;
}

const AuthiumContext = createContext<AuthiumContextValue | null>(null);
export function AuthiumProvider({
    config,
    children,
}: {
    config?: Partial<AuthiumConfig>;
    children: ReactNode;
}) {
    const storage = useStorage();
    const [user, setUser] = useState<User | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);
    const [expiry, setExpiry] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setError(null);
        setLoading(true);

        const saved = storage.get("authium");
        if (!saved) return;

        const decrypted = decrypt(saved);
        if (!decrypted) return clearTokens();

        const [access, refresh, expiryStr] = decrypted.split("\n");
        const expiryNum = parseInt(expiryStr!, 10);
        if (!access || !refresh || !expiryNum || Date.now() > expiryNum)
            return clearTokens();
        
        setAccessToken(access);
        setRefreshToken(refresh);
        setExpiry(expiryNum);
        fetchUserData(access).then((u) => {
            setUser(u);
            setLoading(false);
        }).catch(() => {
            console.error("Failed to fetch user on init");
            setLoading(false);
            setError("Failed to fetch user data");

            clearTokens();
        });
    }, [storage]);

    function clearTokens() {
        storage.remove("authium");
        setAccessToken(null);
        setRefreshToken(null);
        setExpiry(0);
        setUser(null);
    }

    function save(access: string, refresh: string, expiry: number) {
        setAccessToken(access);
        setRefreshToken(refresh);
        setExpiry(expiry);

        const encrypted = encrypt([access, refresh, expiry].join("\n"));
        storage.set("authium", encrypted);
    }

    function signIn(expiryOverride?: number) {
        if (!config || !config.appId || !config.apiKey) {
            setError("Authium not configured. Please provide appId and apiKey to AuthiumProvider.");
            return;
        }

        const csrf = Math.random().toString(36).substring(2);
        storage.set("authium_csrf", csrf);

        let url = `https://authium.ezerium.com/authorize?appId=${config.appId}&apiKey=${config.apiKey}&state=${csrf}`;
        if (expiryOverride) url += `&expiry=${expiryOverride}`;
        window.location.href = url;
    }

    async function signOut(): Promise<void> {
        try {
            await axios.post(`${DAEMON_ENDPOINT}/user/logout`, {
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            clearTokens();
        } catch (err) {
            console.error("Failed to log out", err);
        }
    }

    async function refresh(updateLoadingState: boolean = false): Promise<void> {
        if (updateLoadingState) setLoading(true);

        let diff = expiry - Date.now();
        if (diff > 60 * 1000) return;

        if (!refreshToken) return clearTokens();
        try {
            const res = await axios.post<{ access_token: string; expires_in: number }>(
                `${DAEMON_ENDPOINT}/token/refresh`,
                { token: refreshToken }
            );
            const newAccessToken = res.data.access_token;
            const newExpiry = Date.now() + res.data.expires_in * 1000;

            save(newAccessToken, refreshToken, newExpiry);

            const newUser = await fetchUserData(newAccessToken);
            setUser(newUser);
        } catch (err) {
            console.error("Failed to refresh token", err);
            clearTokens();
        } finally {
            if (updateLoadingState) setLoading(false);
        }
    }

    return (
        <AuthiumContext.Provider value={{
            user,
            isLoggedIn: !!accessToken && expiry > Date.now(),
            loading,
            error,
            signIn,
            signOut,
            refresh,
            save
        }}>
            {children}
        </AuthiumContext.Provider>
    );
}

export function useAuthium() {
    const ctx = useContext(AuthiumContext);
    if (!ctx) throw new Error("useAuthium must be used within AuthiumProvider");
    return ctx;
}

async function fetchUserData(token: string) {

    try {
        const res = await axios.get<User>(`${DAEMON_ENDPOINT}/app/user`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        const user = res.data;
        return user;
    } catch (err) {
        console.error("Failed to fetch user", err);
        return null;
    }
}


/*

export function configure(config: AuthiumConfig) {
    CONFIG = config;
    
    const saved = useStorage().get("authium");
    if (!saved) return;
    const decrypted = decrypt(saved);
    if (!decrypted) return clearTokens();

    const [access, refresh, expiryStr] = decrypted.split("\n");
    const expiry = parseInt(expiryStr!, 10);
    if (!access || !refresh || !expiry || Date.now() > expiry) return clearTokens();

    login(access, refresh, expiry).catch(() => clearTokens());
}

async function login(access: string, refresh: string, expiry: number) {
    ACCESS_TOKEN = access;
    REFRESH_TOKEN = refresh;
    EXPIRY = expiry;

    save(ACCESS_TOKEN, REFRESH_TOKEN, EXPIRY);
    USER = await fetchUserData();
}

export async function signIn(expiryOverride?: number) {
    if (!CONFIG) {
        throw new Error("Authium not configured. Call configure() first.");
    }

    const csrf = Math.random().toString(36).substring(2);
    useStorage().set("authium_csrf", csrf);

    let url = `https://authium.ezerium.com/authorize?appId=${CONFIG.appId}&apiKey=${CONFIG.apiKey}&state=${csrf}`;
    if (expiryOverride) url += `&expiry=${expiryOverride}`;
    window.location.href = url;
}

export function isLoggedIn(): boolean {
    return !!USER;
}

export function getUser(): User | null {
    return USER ? { ...USER } : null;
}

export async function refresh() {
    let diff = EXPIRY - Date.now();
    if (diff > 60 * 1000) return;
    
    if (!REFRESH_TOKEN) return clearTokens();

    try {
        const res = await axios.post<{ access_token: string; expires_in: number }>(
            `${DAEMON_ENDPOINT}/token/refresh`,
            { token: REFRESH_TOKEN }
        );
        ACCESS_TOKEN = res.data.access_token;
        EXPIRY = Date.now() + res.data.expires_in * 1000;

        save(ACCESS_TOKEN, REFRESH_TOKEN, EXPIRY);
    } catch (err) {
        console.error("Failed to refresh token", err);
        clearTokens();
    }
}

function clearTokens() {
    useStorage().remove("authium");
}

function save(accessToken: string, refreshToken: string, expiry: number) {
    const encrypted = encrypt([accessToken, refreshToken, expiry].join("\n"));
    useStorage().set("authium", encrypted);
}
*/
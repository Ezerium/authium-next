"use client";

import { useEffect, useState } from "react";
import { useAuthium } from "./authium-context";
import { useStorage } from "./storage";

export function useAuthiumCallback() {
    const { save } = useAuthium();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const storage = useStorage();

    useEffect(() => {
        const url = new URL(window.location.href);
        const accessToken = url.searchParams.get("access_token");
        const refreshToken = url.searchParams.get("refresh_token");
        const expiry = url.searchParams.get("expires_in");
        const state = url.searchParams.get("state");

        if (!accessToken || !refreshToken || !expiry || !state) {
            setError("Missing tokens in callback URL");
            setLoading(false);
            return;
        }

        const storedCsrf = storage.get("authium_csrf");
        storage.remove("authium_csrf");
        if (state !== storedCsrf) {
            setError("CSRF token mismatch");
            setLoading(false);
            return;
        }

        try {
            save(accessToken, refreshToken, Date.now() + Number(expiry) * 1000);
            setLoading(false);
        } catch (err: any) {
            setError(err.message || "Failed to save tokens");
            setLoading(false);
        }
    }, []);

    return { loading, error };
}

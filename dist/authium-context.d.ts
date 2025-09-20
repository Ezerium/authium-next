import { ReactNode } from "react";
import { AuthiumConfig, User } from "./types";
interface AuthiumContextValue {
    user: User | null;
    isLoggedIn: boolean;
    signIn: (expiryOverride?: number) => void;
    signOut: () => void;
    refresh: () => Promise<void>;
    save: (access: string, refresh: string, expiry: number) => void;
}
export declare function AuthiumProvider({ config, children, }: {
    config: AuthiumConfig;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useAuthium(): AuthiumContextValue;
export {};
//# sourceMappingURL=authium-context.d.ts.map
"use client";

import { useAuthium } from "authium-next";

export default function Home() {
    const { signIn, isLoggedIn, user } = useAuthium();

    if (isLoggedIn) {
        return (
            <div>
                <h1>Welcome, {user?.id}!</h1>
                <p>You are logged in.</p>
            </div>
        );
    }

    return (
        <button 
            onClick={() => signIn()} 
            style={{ backgroundColor: "blue", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
            Sign in with Authium
        </button>
    );
}

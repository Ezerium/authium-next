import * as crypto from "crypto";

const ALGORITHM = "aes-256-cbc";
const SECRET_KEY = crypto.createHash("sha256").update(String(process.env.ENCRYPTION_KEY || "default_key")).digest();

export function encrypt(text: string): string {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(ALGORITHM, SECRET_KEY, iv);
    const encrypted = Buffer.concat([cipher.update(text, "utf8"), cipher.final()]);
    return iv.toString("hex") + ":" + encrypted.toString("hex");
}

export function decrypt(text: string): string | null {
    try {
        const [ivHex, encryptedHex] = text.split(":");
        if (!ivHex || !encryptedHex) return null;

        const iv = Buffer.from(ivHex, "hex");
        const encrypted = Buffer.from(encryptedHex, "hex");

        const decipher = crypto.createDecipheriv(ALGORITHM, SECRET_KEY, iv);
        const decrypted = Buffer.concat([
        decipher.update(encrypted),
        decipher.final(),
        ]);

        return decrypted.toString("utf8");
    } catch (err) {
        console.error("Decryption failed:", err);
        return null; // Don’t throw, return null so consumer can handle
    }
}

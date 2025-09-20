export interface TokenStorage {
    get(key: string): string | null;
    set(key: string, value: string): void;
    remove(key: string): void;
}

const defaultStorage: TokenStorage = {
    get: (k) => (typeof window !== "undefined" ? localStorage.getItem(k) : null),
    set: (k, v) => (typeof window !== "undefined" ? localStorage.setItem(k, v) : undefined),
    remove: (k) => (typeof window !== "undefined" ? localStorage.removeItem(k) : undefined),
};

let storage: TokenStorage = defaultStorage;

export function configureStorage(custom?: TokenStorage) {
    if (custom) storage = custom;
}

export function useStorage() {
    return storage;
}
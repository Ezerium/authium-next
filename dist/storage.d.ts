export interface TokenStorage {
    get(key: string): string | null;
    set(key: string, value: string): void;
    remove(key: string): void;
}
export declare function configureStorage(custom?: TokenStorage): void;
export declare function useStorage(): TokenStorage;
//# sourceMappingURL=storage.d.ts.map
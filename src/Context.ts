import { createContext } from 'react';

export interface ContextType {
    delete: (id: Date) => void;
}

export const Context = createContext<ContextType | null>(null);
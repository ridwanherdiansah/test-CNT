import React, { createContext, useContext, useMemo, useState } from "react";

type ContextState = {
    path: string;
    setPath: React.Dispatch<React.SetStateAction<TypePath>>
}
const PrivateContext = createContext<ContextState>(null);
export type TypePath = "home" | "library" | "discover" | "reading" | "profile";
export default function ProviderPrivateContext({ children }: { children: React.ReactNode }) {
    const [path, setPath] = useState<TypePath>("home");
    const values = useMemo(() => ({ path, setPath }), [path, setPath])
    return <PrivateContext.Provider value={values}>
        {children}
    </PrivateContext.Provider>
}

export function usePrivateContextState() {
    const privateContext = useContext(PrivateContext);
    if (!privateContext) {
        throw new Error("context harus di dalam 'ProviderPrivateContext'!");
    }
    return privateContext;
}
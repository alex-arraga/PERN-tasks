import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

// Customized hook
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth debe usarse con un AuthProvider')
    }
    return context
}

// Auth provider
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [errors, setErrors] = useState(null)

    return <AuthContext.Provider value={{
        user,
        isAuth,
        errors
    }}>
        {children}
    </AuthContext.Provider>
}

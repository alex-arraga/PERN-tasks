import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

// Customized hook
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

// Auth provider
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [errors, setErrors] = useState(null)

    // Register user
    const signUp = async (data) => {
        const response = await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const dataSignUp = await response.json()
        setUser(dataSignUp)
        console.log(dataSignUp)
    };

    // login user
    const signIn = async (data) => {
        const response = await fetch('http://localhost:3000/api/signin', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const dataSignIn = await response.json()
        setUser(dataSignIn)
        console.log(dataSignIn)
    };

    // Provider
    return <AuthContext.Provider value={{
        user,
        isAuth,
        errors,
        signUp,
        signIn
    }}>
        {children}
    </AuthContext.Provider>
}

import { createContext, useState, useContext, useEffect } from "react";
import Cookie from 'js-cookie';

export const createAuthContext = createContext();

// Customized hook
export const useAuth = () => {
    const context = useContext(createAuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

// Auth provider
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [frontendErrors, setFrontedErrors] = useState(null)

    // Register user
    const signUp = async (data) => {
        const response = await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // The server returns a json object even if the response is an error, and 'response' interprets and stores it
        const dataSignUp = await response.json()

        if (response.ok) {
            setUser(dataSignUp)
            setIsAuth(true)
            return dataSignUp
        } else {

            // If 'response' is an error and this's an Array
            if (Array.isArray(dataSignUp)) {
                console.log('Data: is Array')
                setFrontedErrors(dataSignUp)
            }

            // If 'response' is an error and this's an Object
            else {
                console.log('Data: was an Object, now is an Array')
                setFrontedErrors([dataSignUp.message])
            }
        }

    };

    // login user
    const signIn = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/api/signin', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            // The server returns a JSON object even if the response is an error, and 'response' interprets and saves it
            const dataSignIn = await response.json()

            if (response.ok) {
                setUser(dataSignIn)
                setIsAuth(true)
                return dataSignIn
            } else {
                // If 'response' is an error and this's an Array
                if (Array.isArray(dataSignIn)) {
                    console.log('Data: is Array')
                    return setFrontedErrors(dataSignIn)
                }

                // If 'response' is an error and this's an Object
                else {
                    console.log('Data: was an Object, now is an Array')
                    return setFrontedErrors([dataSignIn.message])
                }
            }
        } catch (error) {
            console.log(error)
        }
    };

    // Refresh page
    useEffect(() => {
        if (Cookie.get('token')) {
            fetch('http://localhost:3000/api/profile', {
                method: 'GET',
                credentials: 'include'
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error server response')
                    }
                    return response.json()
                })
                .then(data => {
                    setUser(data)
                    setIsAuth(true)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [])

    // Provider
    return <createAuthContext.Provider value={{
        user,
        isAuth,
        frontendErrors,
        signUp,
        signIn
    }}>
        {children}
    </createAuthContext.Provider>
}
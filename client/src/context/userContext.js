import { createContext, useState, useEffect } from 'react'
const UserContext = createContext()

//create provider for user context
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    //need a stateful loggedIn flag to check if user is logged in?
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('/me')
                const data = await res.json()
                setUser(data)
                setLoading(false)
            } catch (err) {
                console.log(err)
                setError(err)
                setLoading(false)
            }
        }
        fetchUser()
    }, [])

    const login = (user) => {
        setUser(user)
    }

    const signup = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }
    
    return (
        <UserContext.Provider value={{ user, error, login, signup, logout }}>
        {!loading && children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider}
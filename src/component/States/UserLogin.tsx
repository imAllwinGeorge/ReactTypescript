import { useState } from "react"
type LoggedUser = { 
    name: string,
    email: string
}

export const UserLogin = () => {
    // const [user, setUser] = useState<LoggedUser | null>(null);
    const [user, setUser] = useState<LoggedUser>({} as LoggedUser);     // here we can use type assertion (a better way) to handle the situation like user data will be stored in the user state like useEffect hook
    const handleLogin = () => {
        setUser({
            name: "Allwin",
            email: "allwin@gmail.com"
        })
    }
    const handleLogout = () => {
        // setUser(null)
        setUser({} as LoggedUser)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <h1>user name is {user?.name} </h1>
        <h1>user email is {user?.email} </h1>       
                                                    {/* here it automatically add optional chaining */}
        {user && (
            <>
            <h1>user name is {user.name} </h1>
            <h1>user email is {user.email} </h1>
                                                    {/* here we don't need any optional chaining because it uses conditional redering */}
            </>
        )}
    </div>
  )
}

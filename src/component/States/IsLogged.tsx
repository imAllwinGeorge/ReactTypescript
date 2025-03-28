import { useState } from "react"


export const IsLogged = () => {
    const [isLoggin, setIsLogin] = useState(false)
    const handleLogin = ()=> {
        setIsLogin(true)
    }
    const handleLogout = () => {
        setIsLogin(false)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        {isLoggin?<h1>User Logged In</h1>:<h1>User LoggedOut</h1>}
    </div>
  )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    setUser,
    logout, selectUser
} from './userSlice'

function Login() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)

    const loginToApp = () => {
        dispatch(setUser({ user: 'khussshal'}))
    }

    return (
        <div>
            <h1>I am the login Component</h1>
            {user ? (<h3>{user} logged in</h3>) : (<h3>No one logged in</h3>)} 
            <button onClick={() => dispatch(logout())}>Logout</button>
            <button onClick={loginToApp}>LOG IN</button>
        </div>
    )
}

export default Login

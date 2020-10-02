import React from 'react'
import { useStateValue } from './StateProvider'

function Login() {
    const [{user}, dispatch] = useStateValue();

    const loginToApp = () => {
        dispatch({
            type: 'SET_USER',
            user: 'khussshal'
        })
    }

    return (
        <div>
            <h1>I am the login Component</h1>
            <button onClick={loginToApp}>LOGIN</button>
        </div>
    )
}

export default Login

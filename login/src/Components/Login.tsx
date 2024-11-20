import React from 'react'

const Login = () => {
  return (
    <>
        <h1>Login Form</h1>
        <form className="login-form flex flex-col items-center gap-2 p-4 m-4">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>            
          <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
        </div>

            <button type="submit">Login</button>
        </form>
          
    </>
  )
}

export default Login

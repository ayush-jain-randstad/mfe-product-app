import React from 'react'

interface AuthLablesProps {
    loginLable: boolean
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

function AuthLables({loginLable, setLogin}: AuthLablesProps) {

  return (
    <div className="authLables flex gap-4 items-center text-xl font-bold m-1 p-1 w-full">
        <button className={loginLable ? 'bg-blue-500 p-2 rounded w-1/2 border-2 text-white rounded' : 'w-1/2 border-2 p-2'} onClick={() => { loginLable ? setLogin(false) : setLogin(true)}}>Member Login</button>
        <button className={!loginLable ? 'bg-blue-500 p-2 rounded w-1/2 border-2 text-white rounded' : 'w-1/2 border-2 p-2'} onClick={() => { loginLable ? setLogin(false) : setLogin(true)}}>Register</button>
    </div>
  )
}

export default AuthLables

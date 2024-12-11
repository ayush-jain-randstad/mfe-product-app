import React, { useState } from 'react'

function Register() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [name, setName] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [successMsg, setSuccessMsg] = useState(false);
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password, name, confirmPassword);
    fetch('http://localhost:8001/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password,
            confirmPassword
        })
    })
    .then(res => res.json())
    .then(data => {
        data.token && localStorage.setItem('token', data.token)
        setTimeout(() => { setSuccessMsg(true) }, 2000) 
    })
    .catch(err => {
        console.log(err)
    })
}
  return (
    <div>   
        {successMsg && <h1 className='text-center text-lg font-bold text-green-500'>Registration Successfull, Please Login</h1>}
        <form id = "register-form" onSubmit={handleSubmit} className="login-form flex flex-col items-center gap-2  m-2 w-full mx-auto">
        <div className='flex flex-col justify-between p-2 w-full'>
            <input className='border-2 bg-slate-200  p-1 rounded' placeholder='Enter your name' type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <div className='flex flex-col justify-between p-2 w-full'>
            <input className='border-2 bg-slate-200  p-1 rounded' placeholder='Enter your email' type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}  value={email}/>
            </div>
            <div className='flex flex-col justify-between p-2 w-full'>
            <input className='border-2 bg-slate-200  p-1 rounded' placeholder='Enter your password' type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            </div>

            <div className='flex flex-col justify-between p-2 w-full'>
            <input className='border-2 bg-slate-200  p-1 rounded' type="password"  placeholder='Confirm your password' id="confirmPassword" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
            </div>

            <button className='text-white font-bold hover:text-white hover:bg-blue-500 bg-blue-600 py-2 w-full mt-4 rounded' type="submit">Register</button>
        </form>
    </div>
  )
}

export default Register

import React, {  useState } from 'react'

// interface LoginProps { 
//   loginLable: boolean
// }

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
    fetch('http://localhost:8001/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(res => res.json())
    .then(data => {
      data.token && localStorage.setItem('token', data.token)
    })
    .catch(err => console.log(err))
  }
 
    


  return (
    <>
        <form onSubmit={handleSubmit} className="login-form flex flex-col items-center gap-2 m-2 w-full m-auto">
        <div className='flex flex-col p-2 w-full'>
          <input placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className='border-2 bg-slate-200 p-1 rounded' value={email}/>
        </div>
        <div className='flex flex-col p-2 w-full'>            
          <input  placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className='border-2 bg-slate-200 p-1 rounded' value={password}/>
        </div>
        <button className='text-white font-bold bg-blue-600 hover:text-white hover:bg-blue-500 py-2 w-full mt-4 rounded' type="submit">Login</button>
        </form>
    </>
  )
}

export default Login

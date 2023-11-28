import React, { useState } from 'react'
import main from '../assets/tree.jpeg'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const sign_Up = ()=>{
        if (name === '' || email === '' || password === '') {
            alert('Fill in all the inputs!')
        }else{
            const user = {
              name: name,
              email: email,
              password: password,
            };
      
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/SignIn');
          }
    }

  return (
    <div style={{backgroundImage: `url(${main})`}} className='flex items-center justify-center h-screen w-full bg-no-repeat bg-cover bg-center'>
         <div className='bg-[rgba(212,201,201,0.69)] flex flex-col justify-center items-center text-black font-bold w-[] p-5 max-sm:w-48'>
                <div className='text-lg max-sm:text-sm'>sign up</div>
                <div className='mt-5 flex flex-col p-10'>
                    <label htmlFor="">Name </label>
                    <input type="text" className='max-sm:w-32' onChange={(event)=>{setName(event.target.value)}}/>

                    <label className='mt-4' htmlFor="">Email </label>
                    <input type="email" className='max-sm:w-32' onChange={(event)=>{setEmail(event.target.value)}}/>

                    <label className='mt-4' htmlFor="">Password </label>
                    <input type="password" className='max-sm:w-32' onChange={(event)=>{setPassword(event.target.value)}}/>

                    <button className='mt-5 bg-slate-400 rounded p-1' onClick={sign_Up}>Sign up</button>
                </div>
            </div> 
    </div>
  )
}

export default SignUp
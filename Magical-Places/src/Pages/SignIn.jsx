import React, { useEffect, useState } from 'react'
import main from '../assets/tree.jpeg'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    // const [isLoggedIn, setIsLoggedIn] = useState(false);


    const sign_In = () => {

        const user = localStorage.getItem('user');
    
        if (user) {
          const currentUser = JSON.parse(user);
    

          if (name === currentUser.name && password === currentUser.password) {
            localStorage.setItem('isLoggedIn', true);
            navigate('/Hirosaki');

        } else {
            alert('Invalid name or password. Please try again.');
          }
        } else {
          alert('No user found. Please sign up first!');
        }
      };

  return (
    <div style={{backgroundImage: `url(${main})`}} className='flex items-center justify-center h-screen w-full bg-no-repeat bg-cover bg-center'>
         <div className='bg-[rgba(212,201,201,0.69)] flex flex-col justify-center items-center text-black font-bold w-[] p-5 max-sm:w-48'>
                <div className='text-lg max-sm:text-sm'>sign in</div>
                <div className='mt-5 flex flex-col p-10'>
                    <label htmlFor="">Name </label>
                    <input type="text" className='max-sm:w-32' onChange={(event)=>{setName(event.target.value)}}/>

                    <label className='mt-4' htmlFor="">Password </label>
                    <input type="password" className='max-sm:w-32' onChange={(event)=>{setPassword(event.target.value)}}/>

                    <button className='mt-5 bg-slate-400 rounded p-1' onClick={sign_In}>Sign in</button>
                </div>
            </div> 
    </div>
  )
}

export default SignIn
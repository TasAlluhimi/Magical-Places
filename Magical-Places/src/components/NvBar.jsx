import React from 'react'
import { Link , useNavigate } from 'react-router-dom'

function NvBar() {
    const navigate = useNavigate()
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    const sign_Out = () => {
        localStorage.clear();
        navigate('/');
      };

  return (
    <>
        <nav className='bg-white p-5 flex justify-between items-center'>
            <div>
                <div className='font-bold text-xl max-sm:text-base'>Magical Places</div>
            </div>

            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                </ul>
            </div>

            <div className='flex gap-5'>
                {/* <button className='bg-slate-400 rounded p-1' onClick={()=>{navi('/SignIn')}}>Sign in</button>
                <button className='bg-slate-400 rounded p-1' onClick={()=>{navi('/SignUp')}}>Sign up</button> */}

            {isLoggedIn ? (
            <button className='bg-slate-400 rounded p-1' onClick={sign_Out}>Sign out</button>
          ) : (
            <>
              <button className='bg-slate-400 rounded p-1' onClick={() => { navigate('/SignIn') }}>Sign in</button>
              <button className='bg-slate-400 rounded p-1' onClick={() => { navigate('/SignUp') }}>Sign up</button>
            </>
          )}
            </div>
        </nav>
    </>
  )
}

export default NvBar
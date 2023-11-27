import React from 'react'
import sky from '../assets/sky.jpeg'

function Error() {
  return (
    <>
        <div style={{backgroundImage: `url(${sky})`}} className='h-screen w-full bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center'>
            <div className='bg-[rgba(77,75,75,0.46)] flex flex-col justify-center items-center text-black font-bold w-96 p-5 max-sm:w-80'>
                <div className='text-lg max-sm:text-base'>404 - You are now no where!</div>
            </div>
            </div>
    </>
  )
}

export default Error
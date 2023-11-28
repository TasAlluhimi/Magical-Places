import React from 'react'
import { Link } from 'react-router-dom'

function Places() {
  return (
    <>
        <div className='flex flex-wrap justify-center items-center gap-10 max-sm:gap-y-2 max-sm:gap-x-5 p-2'>

        <div className='bg-[rgba(203,177,177,0.54)] flex flex-col justify-center items-center text-black font-bold w-60 p-5 max-sm:w-20 text-center max-sm:text-xs max-sm:h-20 h-20'><Link to='/'>Home</Link></div>

        <div className='bg-[rgba(203,177,177,0.54)] flex flex-col justify-center items-center text-black font-bold w-60 p-5 max-sm:w-20 text-center max-sm:text-xs max-sm:h-20 h-20'><Link to='/Hirosaki'>Hirosaki Castle Park 弘前公園 Aomori</Link></div>

        <div className='bg-[rgba(203,177,177,0.54)] flex flex-col justify-center items-center text-black font-bold w-60 p-5 max-sm:w-20 text-center max-sm:text-xs max-sm:h-20 h-20'><Link to='/WaitomoGlowworm'>Waitomo Glowworm Caves New Zealand</Link></div>

        <div className='bg-[rgba(203,177,177,0.54)] flex flex-col justify-center items-center text-black font-bold w-60 p-5 max-sm:w-20 text-center max-sm:text-xs max-sm:h-20 h-20'><Link to='/AntelopeCanyon'>Antelope Canyon USA</Link></div>

        <div className='bg-[rgba(203,177,177,0.54)] flex flex-col justify-center items-center text-black font-bold w-60 p-5 max-sm:w-20 text-center max-sm:text-xs max-sm:h-20 h-20'><Link to='/Zhangjiajie'>Zhangjiajie National Forest Park China</Link></div>

        <div className='bg-[rgba(203,177,177,0.54)] flex flex-col justify-center items-center text-black font-bold w-60 p-5 max-sm:w-20 text-center max-sm:text-xs max-sm:h-20 h-20'><Link to='/Plitvice'>Plitvice Lakes National Park Croatia</Link></div>
        </div>
    </>
  )
}

export default Places
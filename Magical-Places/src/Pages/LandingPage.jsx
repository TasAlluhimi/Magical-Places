import React from 'react'
import ja from '../assets/ja.jpeg'
import Places from '../components/Places'

function LandingPage() {
  return (
    <>
        <div style={{backgroundImage: `url(${ja})`}} className='h-screen w-full bg-no-repeat bg-cover bg-center flex flex-col justify-end items-end'>
            <div className='bg-[rgba(255,255,255,0.54)] flex flex-col justify-center items-center text-black font-bold w-96 p-5 max-sm:w-60'>
                <div className='text-lg max-sm:text-sm'>Hirosaki Castle Park 弘前公園 Aomori</div>
                <div className='mt-5 max-sm:text-xs'>Hirosaki park is a famous hosting place for many events in Hirosaki city. It hosts multiple seasonal events such as, the Sakura Festival in spring, The leaf-viewing festival in Autumn and the snow lantern festival in the winter. It is a place commonly visited by the locals looking for relaxation.</div>
            </div>
            
            </div>
            <Places/>
    </>
  )
}

export default LandingPage
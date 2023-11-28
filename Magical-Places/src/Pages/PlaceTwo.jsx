import React from 'react'
import ac from '../assets/ac.jpeg'
import Places from '../components/Places'

function PlaceTwo() {
  return (
    <>
        <div style={{backgroundImage: `url(${ac})`}} className='h-screen w-full bg-no-repeat bg-cover bg-center flex flex-col justify-end items-end'>
            <div className='bg-[rgba(255,255,255,0.28)] flex flex-col justify-center items-center text-black font-bold w-96 p-5 max-sm:w-48'>
                <div className='text-lg max-sm:text-sm'>Antelope Canyon USA</div>
                <div className='mt-5 max-sm:text-xs'>Navajo Upper Antelope Canyon is a slot canyon in the American Southwest, on Navajo land east of Lechee, Arizona. It includes six separate, scenic slot canyon sections on the Navajo Reservation, referred to as Upper Antelope Canyon (or The Crack), Rattle Snake Canyon, Owl Canyon, Mountain Sheep Canyon, Canyon X and Lower Antelope Canyon (or The Corkscrew). It is the primary attraction of Lake Powell Navajo Tribal Park, along with a hiking trail to Rainbow Bridge National Monument.</div>
            </div>
            
            </div>
            <Places/>
    </>
  )
}

export default PlaceTwo
import React from 'react'
import wa from '../assets/wa.jpeg'
import Places from '../components/Places'

function PlaceOne() {
  return (
    <>
        <div style={{backgroundImage: `url(${wa})`}} className='h-screen w-full bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center'>
            <div className='bg-[rgba(255,255,255,0.28)] flex flex-col justify-center items-center text-black font-bold w-96 p-5 max-sm:w-80 mt-52 max-sm:mt-32'>
                <div className='text-lg max-sm:text-base'>Waitomo Glowworm Caves New Zealand</div>
                <div className='mt-5 max-sm:text-sm'>known as one of New Zealand’s best natural attractions, take a boat ride through the glowworm grotto, marvel at thousands of magical glowworms and become part of over 130 years of cultural and natural history.</div>
            </div>


            <Places/>
            
            </div>
    </>
  )
}

export default PlaceOne
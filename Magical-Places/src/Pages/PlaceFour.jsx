import React from 'react'
import pl from '../assets/pl.jpeg'
import Places from '../components/Places'

function PlaceFour() {
  return (
    <>
        <div style={{backgroundImage: `url(${pl})`}} className='h-screen w-full bg-no-repeat bg-cover bg-center flex flex-col justify-end items-start'>
            <div className='bg-[rgba(40,38,38,0.76)] flex flex-col justify-center items-center text-white font-bold w-96 p-5 max-sm:w-48'>
                <div className='text-lg max-sm:text-sm'>Plitvice Lakes National Park Croatia</div>
                <div className='mt-5 max-sm:text-xs'>The Plitvice Lakes is the oldest and the largest national park in the Republic of Croatia. The exceptional natural beauty of this area has always attracted nature lovers. As a result of that, it was declared the first national park of the Republic of Croatia as early as 8 April 1949. The process of tufa formation, through which tufa barriers and subsequently lakes are formed, is the outstanding universal value for which Plitvice Lakes received international recognition on 26 October 1979, when it was inscribed on the UNESCO World Heritage List.</div>
            </div>
            
            </div>
            <Places/>
    </>
  )
}

export default PlaceFour
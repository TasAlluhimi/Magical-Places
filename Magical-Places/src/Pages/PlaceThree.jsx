import React from 'react'
import zn from '../assets/zn.jpeg'
import Places from '../components/Places'

function PlaceThree() {
  return (
    <>
        <div style={{backgroundImage: `url(${zn})`}} className='h-screen w-full bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center'>
            <div className='bg-[rgba(255,255,255,0.28)] flex flex-col justify-center items-center text-black font-bold w-96 p-5 max-sm:w-80 mt-40 max-sm:mt-32'>
                <div className='text-lg max-sm:text-base'>Zhangjiajie National Forest Park China</div>
                <div className='mt-5 max-sm:text-sm'>Zhangjiajie National Forest Park (Chinese: 湖南张家界国家森林公园; pinyin: Húnán Zhāngjiājiè Guójiā Sēnlín Gōngyuán; lit. 'Hunan Zhangjiajie National Forest Park') is a national forest park located in Zhangjiajie, Hunan Province, China. It is one of several national parks within the Wulingyuan Scenic Area.</div>
            </div>


            <Places/>
            
            </div>
    </>
  )
}

export default PlaceThree
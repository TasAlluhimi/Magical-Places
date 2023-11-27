import React from 'react'
import { Routes, Route as R } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import PlaceOne from '../Pages/PlaceOne'
import PlaceTwo from '../Pages/PlaceTwo'
import PlaceThree from '../Pages/PlaceThree'
import PlaceFour from '../Pages/PlaceFour'

function Route() {
  return (
    <>
        <Routes>
            <R path='/' element={<LandingPage/>}></R>
            <R path='/WaitomoGlowworm' element={<PlaceOne/>}></R>
            <R path='/AntelopeCanyon' element={<PlaceTwo/>}></R>
            <R path='/Zhangjiajie' element={<PlaceThree/>}></R>
            <R path='/Plitvice' element={<PlaceFour/>}></R>
        </Routes>
        
    </>
  )
}

export default Route
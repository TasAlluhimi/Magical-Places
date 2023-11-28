import React from 'react'
import { Routes, Route as R } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import PlaceOne from '../Pages/PlaceOne'
import PlaceTwo from '../Pages/PlaceTwo'
import PlaceThree from '../Pages/PlaceThree'
import PlaceFour from '../Pages/PlaceFour'
import Error from '../Errors/Error'
// import Places from './Places'
import HomePage from '../Pages/HomePage'
import NvBar from './NvBar'
import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'

function Route() {
  return (
    <>

    <NvBar></NvBar>

        <Routes>
            <R path='/' element={<HomePage/>}></R>
            <R path='/SignUp' element={<SignUp/>}></R>
            <R path='/SignIn' element={<SignIn/>}></R>
            <R path='/Hirosaki' element={<LandingPage/>}></R>
            <R path='/WaitomoGlowworm' element={<PlaceOne/>}></R>
            <R path='/AntelopeCanyon' element={<PlaceTwo/>}></R>
            <R path='/Zhangjiajie' element={<PlaceThree/>}></R>
            <R path='/Plitvice' element={<PlaceFour/>}></R>
            <R path='/*' element={<Error/>}></R>
        </Routes>
        {/* <Places/> */}
    </>
  )
}

export default Route
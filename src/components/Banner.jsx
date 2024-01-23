import React from 'react'
import imgBanner from '../assets/dummy-banner.jpg'
import './Banner.css'
function Banner() {
  return (
    <>
        <img src={imgBanner} alt="" />
        <div className='
        banner-head flex text-2xl items-center justify-center relative 
        bg-[#16151598] text-[#c5910e] bottom-[5rem] h-[5rem]
        '>
            Banner Film
        </div>
    </>
  )
}

export default Banner
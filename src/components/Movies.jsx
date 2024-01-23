import React from 'react'
import Image from '../assets/dummy-banner.jpg'

function Movies() {
  return (
    <div className='-mt-12'>
        <h3 className='font-bold text-2xl text-center'>Trending Movies</h3>
        <div className='flex flex-wrap justify-center'>
            <img src={Image} className='w-[150px] m-4 rounded-xl h-[30vh] hover:scale-110 duration-300' alt="" />
            <img src={Image} className='w-[150px] m-4 rounded-xl h-[30vh] hover:scale-110 duration-300' alt="" />
            <img src={Image} className='w-[150px] m-4 rounded-xl h-[30vh] hover:scale-110 duration-300' alt="" />
            <img src={Image} className='w-[150px] m-4 rounded-xl h-[30vh] hover:scale-110 duration-300' alt="" />
            <img src={Image} className='w-[150px] m-4 rounded-xl h-[30vh] hover:scale-110 duration-300' alt="" />
        </div>
    </div>
  )
}

export default Movies
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Banner(props) {
  const [banner, setBanner] = useState('')
  console.log(props);
  const bgImageStyle = {
    backgroundImage: banner !== '' ? `url(https://image.tmdb.org/t/p/original${banner.backdrop_path})` : 'loading',
  }

  useEffect(()=>{
    console.log(props);
    setBanner(props.banner)
  },[])
  return (
    <>
      <div className='h-[60vh] md:h-[70vh] bg-end bg-cover flex items-end'
      style={bgImageStyle}
      >
        <div className='
        text-3xl text-center w-full 
        bg-[#16151598] text-[#c5910e] p-4
        '>
          {banner.title}
        </div>
      </div>
    </>
  )
}

export default Banner
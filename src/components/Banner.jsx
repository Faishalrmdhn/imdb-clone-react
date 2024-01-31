import React, { useEffect, useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import ApiService from '../api'

function Banner(props) {
  const [banner, setBanner] = useState({
    backgroundImage: ``
  })
  const [title, setTitle] = useState('')
  
  useEffect(()=>{
    (async function () {
      try {
        const res = await ApiService.nowPlaying()
        setBanner({
          backgroundImage: `url(https://image.tmdb.org/t/p/original${res.data.results[0].backdrop_path})`
        })
        setTitle(res.data.results[0].title)
      } catch (error) {
        console.log(error);
      }
    })()
  },[])
  return (
    <>
      <div className='h-[60vh] md:h-[70vh] sm:bg-end sm:bg-cover flex items-end'
      style={banner}
      >
        {banner === '' ? (
          <div className='flex w-full h-full items-center justify-center'>
            <InfinitySpin
            visible={true}
            width="200"
            color="#c5910e"
            ariaLabel="infinity-spin-loading"
            />
          </div>
          ) : (
          <div className='
          text-3xl text-center w-full 
          bg-[#16151598] text-[#c5910e] p-4
          '>
            {title}
          </div>
          )}
        
      </div>
    </>
  )
}

export default Banner
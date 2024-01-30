import React, { useEffect, useState } from 'react'
import ApiService from '../api/index'

function Movies(props) {
  const [movie, setMovie] = useState('')
  const [banner, setBanner] = useState('')
  const bgImageStyle = {
     backgroundImage: movie !== '' ? `url(https://image.tmdb.org/t/p/original${movie.poster_path})` : 'loading'
  }


  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await ApiService.nowPlaying()
        console.log(res.data.results[0]);
        props.backdrop(res.data.results[0])
        setMovie(res.data.results[0])
        // setBgImage({backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`})
      } catch (error) {
        console.log(error);
      }
    }

    fetchData()
  },[])
  return (
    <div className='mt-8'>
        <h3 className='font-bold text-2xl text-center'>Trending Movies</h3>
        <div className='flex flex-wrap justify-center'>
            <div className='
            relative
            w-[160px] m-4 rounded-xl 
            h-[30vh] 
            md:w-[250px]
            md:h-[40vh]
            hover:scale-110 
            duration-300 
            bg-center bg-cover
            cursor-pointer'
            style={bgImageStyle}
            >    
                <div className='w-full
                absolute
                bottom-0
                text-center bg-[#16151598] 
                text-[#c5910e] py-2'
                >{movie.title}</div>
            </div>

            <div className='
            relative
            w-[160px] m-4 rounded-xl 
            h-[30vh] 
            md:w-[250px]
            md:h-[40vh]
            hover:scale-110 
            duration-300 
            bg-center bg-cover
            cursor-pointer'
            style={bgImageStyle}
            >    
                <div className='w-full
                absolute
                bottom-0
                text-center bg-[#16151598] 
                text-[#c5910e] py-2'
                >{movie.title}</div>
            </div>

            <div className='
            relative
            w-[160px] m-4 rounded-xl 
            h-[30vh] 
            md:w-[250px]
            md:h-[40vh]
            hover:scale-110 
            duration-300 
            bg-center bg-cover
            cursor-pointer'
            style={bgImageStyle}
            >    
                <div className='w-full
                absolute
                bottom-0
                text-center bg-[#16151598] 
                text-[#c5910e] py-2'
                >{movie.title}</div>
            </div>
        </div>
    </div>
  )
}

export default Movies
import React, { useEffect, useState } from 'react'
import ApiService from '../api/index'

function Movies() {
  const [movie, setMovie] = useState('')
  const bgImageStyle = {
     backgroundImage: movie !== '' ? `url(https://image.tmdb.org/t/p/original${movie.poster_path})` : 'loading'
  }
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await ApiService.popularMovies()
        console.log(res.data.results[0]);
        return setMovie(res.data.results[0])
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
            w-[160px] m-4 rounded-xl 
            h-[30vh] 
            md:w-[200px]
            md:h-[40vh]
            hover:scale-110 
            duration-300 
            bg-center bg-cover'
            style={bgImageStyle}
            >    
                <div className='w-full
                text-center bg-[#16151598] 
                text-[#c5910e] py-2'
                >{movie.title}</div>
            </div>

            <div className='
            w-[160px] m-4 rounded-xl 
            h-[30vh] 
            md:w-[200px]
            md:h-[40vh]
            hover:scale-110 
            duration-300 
            bg-center bg-cover'
            style={bgImageStyle}
            >    
                <div className='w-full
                text-center bg-[#16151598] 
                text-[#c5910e] py-2'
                >{movie.title}</div>
            </div>

            <div className='
            w-[160px] m-4 rounded-xl 
            h-[30vh] 
            md:w-[200px]
            md:h-[40vh]
            hover:scale-110 
            duration-300 
            bg-center bg-cover'
            style={bgImageStyle}
            >    
                <div className='w-full
                text-center bg-[#16151598] 
                text-[#c5910e] py-2'
                >{movie.title}</div>
            </div>
        </div>
    </div>
  )
}

export default Movies
import React, { useEffect, useState } from 'react'
import ApiService from '../api/index'

function Movies(props) {
  const [movie, setMovie] = useState('')

  const bgImageStyle = (poster)=>{
    return {
      backgroundImage: movie.length !== 0 ? `url(https://image.tmdb.org/t/p/original${poster})` : ''
    }
  }
  
  
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await ApiService.nowPlaying()
        setMovie(res.data.results)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData()
  },[])
  
  return (
    <div className='mt-8'>
        <h3 className='font-bold text-2xl text-center'>Now Playing</h3>
        <div className='flex flex-wrap justify-center align-items'>
            {
              movie.length === 0 ? 
                <h1>Loading...</h1> : 
                movie.map((item, idx)=>{
                  return (
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
                    style={bgImageStyle(item.poster_path)}
                    >    
                        <div className='w-full
                        absolute
                        bottom-0
                        text-center bg-[#16151598] 
                        text-[#c5910e] py-2'
                        >
                          {item.title}
                        </div>
                    </div>
                  )
                })
            }
            

        </div>
    </div>
  )
}

export default Movies
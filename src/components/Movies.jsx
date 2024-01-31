import React, { useEffect, useState, useMemo } from 'react'
import ApiService from '../api/index'
import { InfinitySpin } from 'react-loader-spinner' 

function Movies(props) {
  const [movie, setMovie] = useState('')
  const isMovieExist = useMemo(()=>{
    return movie.length !== 0
  }, [movie])

  const bgImageStyle = (poster)=>{
    return {
      backgroundImage: isMovieExist ? `url(https://image.tmdb.org/t/p/original${poster})` : ''
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
              isMovieExist ? 
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
                    key={idx}
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
                }) : 
                <InfinitySpin
                visible={true}
                width="200"
                color="#c5910e"
                ariaLabel="infinity-spin-loading"
                />
            }
            

        </div>
    </div>
  )
}

export default Movies
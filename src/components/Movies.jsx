import React, { useEffect, useState, useMemo } from 'react'
import ApiService from '../api/index'
import { InfinitySpin } from 'react-loader-spinner' 
import Pagination from './Pagination'

function Movies() {
  let [movieList, setMovieList] = useState('')
  let [pageNum, setPage] = useState(1) 
  let [totalPages, setTotalPages] = useState(null)
  let [hovered, setHovered] = useState('')
  let [favourite, setFav] = useState([])
  const isMovieExist = useMemo(()=>{
    return movieList.length !== 0
  }, [movieList])

  const bgImageStyle = (poster)=>{
    return {
      backgroundImage: isMovieExist ? `url(https://image.tmdb.org/t/p/original${poster})` : ''
    }
  }

  const onPrev=()=>{
    if (pageNum === 1) {
      return setPage(totalPages)
    }
    setPage(pageNum - 1)
  }
  
  const onNext=()=>{
    if (pageNum === totalPages) {
      return setPage(1)
    }
        setPage(pageNum + 1)
  }
  
  const showEmoticon=(id)=>{
    setHovered(id)
  }

  const addFav =(id)=>{
    const newFav = [...favourite, id]
    return setFav(newFav)
  }

  const deleteFav = (id)=>{
    const filteredFav = favourite.filter(val=>{
      return val !== id
    })
    setFav(filteredFav)
  }
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await ApiService.nowPlaying(pageNum)
        setMovieList(res.data.results)
        setTotalPages(res.data.total_pages)
      } catch (error) {
        console.log(error);
      }
    }

    // const addFavoriteMovie = async (id)=>{
    //   let data = {
    //     'media_type' : 'movie',
    //     'media_id' : id,
    //     'favorite' : true
    //   }

    //   try {
    //     const res = await ApiService.addFavoriteMovies(data)
    //     console.log(res);
    //   } catch (error) {
    //     throw new Error(error)
    //   }
    // }
    fetchData()
    // addFavoriteMovie()
  },[pageNum])
  
  return (
    <div className='mt-8'>
        <h3 className='font-bold text-2xl text-center'>Now Playing</h3>
        <div className='flex flex-wrap justify-center align-items'>
            {
              isMovieExist ? 
                movieList.map((movie, idx)=>{
                  return (
                    <div 
                    onMouseOver={
                      ()=>{showEmoticon(movie.id)}
                    }
                    onMouseOut={
                      ()=>{showEmoticon('')}
                    }
                    className='
                    relative
                    w-[160px] m-4 rounded-xl 
                    h-[30vh] 
                    md:w-[250px]
                    md:h-[40vh]
                    hover:scale-110 
                    duration-300 
                    bg-center bg-cover
                    cursor-pointer'
                    style={bgImageStyle(movie.poster_path)}
                    key={idx}
                    >    
                        <div className='
                        absolute
                        top-0
                        right-0
                        text-center bg-[#16151598] 
                        text-[#c5910e] p-2
                        rounded-bl-xl
                        rounded-rt-xl'
                        style={{
                          display: hovered === movie.id? 'block' : 'none'
                        }}
                        >
                            {favourite.includes(movie.id) === false ? (
                              <div 
                              onClick={()=>{addFav(movie.id)}}>
                                👍
                              </div>
                            ) : (
                              <div
                              onClick={()=>{deleteFav(movie.id)}}>
                                👎
                              </div>
                            )}
                          
                        </div>

                        <div className='w-full
                        absolute
                        bottom-0
                        text-center bg-[#16151598] 
                        text-[#c5910e] py-2'
                        >
                          {movie.title}
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
        <Pagination
        pageNum={pageNum}
        onPrev={onPrev}
        onNext={onNext}
        ></Pagination>
    </div>
  )
}

export default Movies
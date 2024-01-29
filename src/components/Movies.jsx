import React, { useEffect, useState } from 'react'
import ApiService from '../api/index'

function Movies() {
  const [data, setData] = useState('')
  // const getData =  async () =>{
  //   const res = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=281bab7b8ac534c9cfdf7189e6b01632')
  //   return console.log(res.data)
  // }
  // axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc')
  // .then((res)=>{
  //   console.table(res);
  // })
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        // const urlAPI = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc'
        // const apiKey = '281bab7b8ac534c9cfdf7189e6b01632'

        // const res = await axios.get(urlAPI, {
        //   params:{
        //     'api_key': apiKey
        //   }
        // })
        const res = await ApiService.popularMovies()
        console.log(res);
        // return setData(res)
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
            <div className='bg-[url(https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png)]
            w-[160px] m-4 rounded-xl 
            h-[30vh] 
            md:w-[180px]
            md:h-[40vh]
            hover:scale-110 
            duration-300 
            bg-center bg-cover'>    
                <div className='w-full
                text-center bg-[#16151598] 
                text-[#c5910e] py-2'
                >Movie 1</div>
                {/* <div>{fetchData}</div> */}
            </div>
        </div>
    </div>
  )
}

export default Movies
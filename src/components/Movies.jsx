import React from 'react'

function Movies() {
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
            </div>
        </div>
    </div>
  )
}

export default Movies
import React from 'react'
import { useState } from 'react'
function Pagination() {
  let [pageNum, setPage] = useState(1) 
  const onPrev=()=>{
    if (pageNum === 1) {
      return setPage(1)
    }
      setPage(pageNum - 1)
  }
  const onNext=()=>{
        setPage(pageNum + 1)
  }

  return (
    <div className='flex justify-center'>
        <div className='bg-black text-[#daa520] border-2 p-2 border-r-0 rounded-l-xl border-[#daa520]'
          onClick={onPrev}
        >Previous</div>
        <div className='bg-black text-[#daa520] border-2 p-2 border-[#daa520]'>{pageNum}</div>
        <div className='bg-black text-[#daa520] border-2 p-2 border-l-0 rounded-r-xl border-[#daa520]'
          onClick={onNext}
         >Next</div>
    </div>
  )
}

export default Pagination
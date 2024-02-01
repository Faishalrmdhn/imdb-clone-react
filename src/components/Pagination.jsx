import React from 'react'
import { useState } from 'react'
function Pagination(props) {
  let {pageNum, onNext, onPrev} = props

  return (
    <div className='flex justify-center'>
        <div className='cursor-pointer bg-black text-[#daa520] border-2 p-2 border-r-0 rounded-l-xl border-[#daa520]'
          onClick={onPrev}
        >Previous</div>
        <div className='bg-black text-[#daa520] border-2 p-2 border-[#daa520]'>{pageNum}</div>
        <div className='cursor-pointer bg-black text-[#daa520] border-2 p-2 border-l-0 rounded-r-xl border-[#daa520]'
          onClick={onNext}
         >Next</div>
    </div>
  )
}

export default Pagination
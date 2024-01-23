import React from 'react'

function Pagination() {
  return (
    <div className='flex justify-center'>
        <div className='bg-black text-[#daa520] border-2 p-2 border-r-0 rounded-l-xl border-[#daa520]'>Previous</div>
        <div className='bg-black text-[#daa520] border-2 p-2 border-[#daa520]'>1</div>
        <div className='bg-black text-[#daa520] border-2 p-2 border-l-0 rounded-r-xl border-[#daa520]'>Next</div>
    </div>
  )
}

export default Pagination
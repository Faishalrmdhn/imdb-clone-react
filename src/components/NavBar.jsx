import React from 'react'
import Logo from '../assets/movie-logo.png'
function NavBar() {
  return (
    <div className='flex space-x-8 pl-3 py-4 border items-center font-bold'>
        <img src={Logo} width={50} alt="movie-logo" />
        <h3 className='text-xl text-blue-400'>Movies</h3>
        <h3 className='text-xl text-blue-400'>Favourites</h3>
    </div>
  )
}

export default NavBar
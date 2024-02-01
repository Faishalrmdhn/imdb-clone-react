import React from 'react'
import Logo from '../assets/movie-logo.png'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className='flex space-x-8 pl-3 py-4 items-center font-bold'>
        <img src={Logo} width={50} alt="movie-logo" />
        <Link to={'/'}>
          <h3 className='text-xl text-blue-400 hover:text-2xl'>Movies</h3>
        </Link>
        <Link to={'/favourite'}>
          <h3 className='text-xl text-blue-400 hover:text-2xl'>Favourite</h3>
        </Link>
        <br />
    </div>
  )
}

export default NavBar
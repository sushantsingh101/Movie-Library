import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500'>
      <Link to={'/'}><span>Action<span className='text-white'>Movies</span></span></Link>
<Link to={'/AddMovies'}><h1 className='text-lg text-white cursor-pointer flex items-center'>
    <Button><AddCircleOutlineIcon className='mr-2' color='Secondary'/><span className='text-white'>Add Movies</span></Button></h1></Link>
    </div>
  )
}

export default Header

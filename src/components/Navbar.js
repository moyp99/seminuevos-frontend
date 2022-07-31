import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    return (
        <nav className=' fixed min-w-full flex justify-between items-center flex-row px-4 pt-2 h-12'>
            <h1 className='text-primary z-10 text-4xl  font-black'>LOGO</h1>
            <div className='bg-secondary z-10 shadow-blue flex justify-center rounded items-center w-8 h-8'>
              <MenuIcon className='text-primary'/>
            </div>
        </nav>
    )
}

export default Navbar

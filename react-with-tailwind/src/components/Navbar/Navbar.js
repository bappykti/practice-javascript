import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const openIcon = <Bars3Icon onClick={()=> setOpen(!open)} className="h-6 w-6 text-blue-500"/>;
    const closeIcon = <XMarkIcon onClick={()=> setOpen(!open)} className="h-6 w-6 text-blue-500"/>
    const routes =[
        {id:1, name: 'Home', path: '/home'},
        {id:2, name: 'Product', path: '/product'},
        {id:3, name: 'About', path: '/about'},
        {id:4, name: 'Contact', path: '/contact'},
        {id:5, name: 'Orders', path: '/orders'}
    ]
    return (
        <nav className='bg-purple-200 w-full'>
            <div onClick={()=> setOpen(!open)} className="h-6 w-6 text-blue-500 md:hidden">
                {
                    open ? <XMarkIcon/> : <Bars3Icon/>
                }
            </div>

            {/* {
                open ? closeIcon : openIcon
            } */}
            {/* {
                open ? <XMarkIcon onClick={()=> setOpen(!open)} className="h-6 w-6 text-blue-500"/> : <Bars3Icon onClick={()=> setOpen(!open)} className="h-6 w-6 text-blue-500"/>
            } */}
            
            {/* <span>{open ? "open" : "Close"}</span> */}
            <ul className={`md:flex justify-center absolute md:static duration-500 ease-in bg-purple-200 w-full ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link 
                        key={route.id}
                        route={route}
                        ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;
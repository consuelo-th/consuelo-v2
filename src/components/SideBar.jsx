import React from 'react';
import {navigation} from '../data'
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {

    const location = useLocation().pathname;
    const active = ' border-primary-70 bg-primary-10 text-primary-60';
    const inactive = ' border-transparent text-white hover:border-primary-70 hover:bg-primary-10 hover:text-primary-60';
    return ( 
            <div className='h-screen w-fit bg-primary-50 py-4'>
                <ul className='flex flex-col justify-between items-start gap-3'>
                    {
                        navigation.map((nav, idx) => {
                            return (
                                <li key={nav.id} className={`transition duration-700 ease-in-out py-3 px-5 w-full border-l-8 cursor-pointer ${+ location === nav.path ? active : inactive}` }>

                                    <Link to={nav.path}>
                                        <div className='flex gap-2 items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d={nav.icon} />
                                            </svg>
                                            <p>{nav.title}</p>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
     );
}
 
export default SideBar;
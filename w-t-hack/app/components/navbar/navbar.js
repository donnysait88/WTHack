import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='header flex w-full justify-between m-auto py-[10px] bg-slate-100 fixed'>
            <div className='logo ml-10 flex items-center font-bold text-[20px]'>
                <h2>WTHack</h2>
            </div>
            <div className='menu'></div>
            <nav>
                <ul className='flex gap-12 p-4'>
                    <li className=' p-2 text-blue-950 text-[20px] px-4 font-bold rounded-md hover:bg-blue-950 hover:text-white'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='p-2 text-blue-950 text-[20px] px-4 font-bold rounded-md hover:bg-blue-950 hover:text-white'>
                        <Link href="./services">Services</Link>
                    </li>
                    <li className='p-2 text-blue-950 text-[20px] px-4 font-bold rounded-md hover:bg-blue-950 hover:text-white'>
                        <Link href="/review">Review</Link>  
                    </li>
                    <li className='p-2 text-blue-950 text-[20px] px-4 font-bold rounded-md hover:bg-blue-950 hover:text-white'>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

        </div>
    </div>
  )
}

export default Navbar
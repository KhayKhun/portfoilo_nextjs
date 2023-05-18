import React from 'react'
import Link from 'next/link'
import {FaGithub,FaFacebook,FaLinkedin} from 'react-icons/fa'

const HeaderComponent = () => {
  return (
    <header className='fixed top-0 w-screen bg-opacity-[0.5] z-[1000] flex px-[40px] py-[10px] lg:py-[15px] justify-between bg-teal-100 shadow-sm shadow-teal-300 text-sm sm:text-md lg:text-lg'>
        <ul className='flex text-[16px] gap-[15px] font-bold'>
            <h1 className='text-black hover:cursor-default hidden sm:flex'>&lt;<span className='text-green-500'> simple </span>&gt;</h1>
            <li><Link className='hover:scale-[1.3]' href="/">Home</Link></li>
            <li><Link href="/projects">My Projects</Link></li>
        </ul>
        <ul className='flex gap-[10px]'>
            <a href="https://github.com/KhayKhun" target="_blank"><FaGithub className='icon text-blue-500'/></a>
            <a href="https://www.facebook.com/profile.php?id=100072343315020" target="_blank"><FaFacebook className='icon text-blue-500'/></a>
            <a href="https://linkedin.com/in/khay-khun-4389b8255" target="_blank"><FaLinkedin className='icon text-blue-500'/></a>
        </ul>
    </header>
  )
}

export default HeaderComponent

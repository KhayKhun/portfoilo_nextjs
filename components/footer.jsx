import React from 'react'
import {FaGithub,FaFacebook,FaLinkedin,FaAngleRight} from 'react-icons/fa'

const FooterComponent = () => {
  return (
    <div className='flex flex-col items-center px-[40px] py-[15px] bg-slate-600 text-white border-t border-slate-900'>
        <div className='flex justify-between items-end w-full'>
            <ul>
                <li><a href="/projects" className=' underline flex'><FaAngleRight/> Checkout my projects</a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100086391128252" className=' underline flex'><FaAngleRight/> My facebook page</a></li>
            </ul>
                <ul className='flex gap-[10px]'>
                <a href="https://github.com/KhayKhun" target="_blank"><FaGithub className='icon '/></a>
                <a href="https://www.facebook.com/profile.php?id=100072343315020" target="_blank"><FaFacebook className='icon '/></a>
                <a href="https://linkedin.com/in/khay-khun-4389b8255" target="_blank"><FaLinkedin className='icon '/></a>
            </ul>
        </div>
        
        <span className='text-[12px] mt-[15px]'>KhayKhun with create-next-app</span>
        
    </div>
  )
}

export default FooterComponent
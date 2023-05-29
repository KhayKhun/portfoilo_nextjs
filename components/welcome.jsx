import React from 'react'
import { Titillium_Web } from 'next/font/google'
const Titillium = Titillium_Web({ subsets: ['latin'],weight : '700' })

const myImage = "https://firebasestorage.googleapis.com/v0/b/my-portfolio-60826.appspot.com/o/me.png?alt=media&token=271c4ede-c74a-457c-9706-cb7012af01c4"

const WelcomeComponent = () => {
  return (
    <section className="flex flex-col items-center md:flex-row justify-evenly py-[100px] welcome text-sm sm:text-lg md:text-2xl font-bold h-screen p-[10px]">
      <div className='flex flex-col justify-between py-[60px]'>
        <div>
            <h1 className=''>
                Hi There! I'm <span className={`${Titillium.className} text-xl sm:text-2xl md:text-4xl text-blue-500`}>Khay Khun</span>.</h1>
            <p>I develop modern full stack websites.</p>
        </div>
        <a href='https://www.facebook.com/profile.php?id=100086391128252' target="_blank" className='text-[16px] underline text-blue-600 font-light'>Checkout my facebook blogs.</a>
      </div>
      <div className='w-[280px] h-[280px] md:w-[280px] md:h-[280px] overflow-hidden me bg-gradient-to-b from-blue-300 to-teal-200'>
        <a href={myImage} target="_blank"><img src={myImage} className="w-full h-full"/></a>
      </div>
    </section>
  )
}

export default WelcomeComponent

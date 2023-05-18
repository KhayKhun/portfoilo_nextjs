import React from 'react'

const PersonalInformationComponent = () => {
  return (
    <div className='bg-gradient-to-br from-teal-100 to-blue-100 p-[40px]'>
      <h1 className='text-xl my-[8px] font-bold'>Personal Information</h1>
      <section className='flex gap-[10vw] flex-col lg:flex-row items-center'>
        <div className='gap-[5px] bg-white rounded-lg shadow-blue-200 shadow-sm border px-[13px] flex items-center'>
            <ul className='text-sm font-bold leading-loose'>
                <li>FULL NAME :</li>
                <li>DATE OF BIRTH :</li>
                <li>EMAIL :</li>
                <li>PHONE :</li>
            </ul>
            <ul className='text-sm leading-loose'>
                <li>Sai Khay Khun</li>
                <li>22<sup>nd</sup> May 2006</li>
                <li className='underline'>khaykhun22052006@gmail.com</li>
                <li className='underline'>+95 9421239656</li>
            </ul>
        </div>
        <div className='flex-1 flex flex-col gap-[15px]'>
            <span className='text-md'>
                Hello, I'm Khay Khun, a talented full-stack developer.
                I specialize in creating modern websites with a seamless user experience.
                Let's do something amazing together. 
            </span>
            <div className='bg-gray-700 w-full h-[1px]'/>
            <div className='flex flex-col items-center gap-[10px]'>
                <h1 className='font-bold text-lg'>My Languages</h1>
                <div className='grid grid-cols-2 gap-[5px] w-[80%]'>
                    <p>Burmese :</p>
                    <p className='text-[11px] p-[3px] bg-green-200 rounded-full flex justify-center'>Native</p>
                    <p className='row-start-2'>English :</p>
                    <p className='row-start-2 text-[11px] p-[3px] bg-blue-200 rounded-full flex justify-center'>Intermediate</p>
                </div>
            </div>
        </div>
      </section>
      
    </div>
  )
}

export default PersonalInformationComponent

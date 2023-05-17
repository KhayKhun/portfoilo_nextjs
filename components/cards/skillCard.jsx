import React from 'react'
import { BiCaretRight } from 'react-icons/bi'
const SkillCard = ({Icon,title,skills}) => {
  return (
    <div className={`pb-[20px]`}>
      <section className={`relative z-20 h-full rounded-lg flex flex-col items-center gap-[15px] bg-orange-100 border-[1.5px] border-orange-300 shadow-md shadow-orange-200 pt-[40px] pb-[15px]`}>
      <div className='absolute top-[-30px] w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center m-auto z-10'>
        <Icon className={`w-[70%] h-auto mx-auto text-orange-500`}/>
      </div>
        <h1 className='font-bold'>{title}</h1>
        <ul className='w-[80%]'>
          {
            skills.map(skill => <li key={skill} className='flex'><BiCaretRight className='text-green-500'/> {skill}</li>)
          }
        </ul>
      </section>
    </div>
  )
}

export default SkillCard

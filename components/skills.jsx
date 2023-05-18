import React from 'react'
import { DiDatabase ,DiVisualstudio} from 'react-icons/di'
import { BiDesktop} from 'react-icons/bi'
import SkillCard from './cards/skillCard'

const SkillsComponent = () => {
  return (
    <div className='flex flex-col items-center px-[40px]'>
      <h1 className='font-bold mt-[15px] mb-[60px]'>Skills I have learnt so far</h1>
      <section className='grid sm:grid-cols-3 gap-[15px] w-full'>
        <SkillCard color ="yellow" title="Front-end" Icon={BiDesktop} skills={
          [
            "Css animation",
            "Tailwindcss/Bootstrap",
            "Javascript DOM",
            "React/Redux",
            "Astrojs",
            "Markdown",
          ]
        }
        />
        <SkillCard color ="orange" title="Back-end" Icon={DiDatabase} skills={
          [
            "Node.js/Express",
            "Mongodb/Mongoose",
            "JWT Authentication",
            "Cookie/Session Authentication"
          ]
        } 
         />
        <SkillCard color ="teal" title="Other skills" Icon={DiVisualstudio} skills={
          [
            "Photoshop",
            "UI/UX deisgn with Figma",
            "Git/Github",
          ]
        } 
        />
      </section>
    </div>
  )
}

export default SkillsComponent
'use client'
import React, { useRef } from 'react';
import {FiCode,FiRss} from 'react-icons/fi'

const ProjectCard = ({ data }) => {
  const main = data.main;
  const links = data.links;
  const layerRef = useRef(null);

  const handleMouseOver = () => {
    layerRef.current.classList.add('hidden')
  };

  const handleMouseLeave = () => {
    layerRef.current.classList.remove('hidden')
  };

  return (
    <section
      className="relative col-span-1"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {/* Part-1 */}
      <div ref={layerRef} className="h-full relative z-20 p-[10px] flex flex-col gap-[10px] bg-orange-100 border-[1.5px] border-orange-400 shadow-sm shadow-orange-200 rounded-lg">
        <img src={links.image} className="w-full rounded-lg" />
        <span className='text-sm'>{main.description}</span>
      </div>

      {/* Part-2 */}
      <div id="part2" className="absolute top-0 left-0 w-full h-full p-[10px] flex flex-col justify-evenly bg-gray-100 border-[1.5px] border-gray-400 shadow-lg shadow-gray-300 rounded-lg">
      
        <div className='flex w-full flex-col items-center'>
          <h1>{main.name}</h1>
          <ul className='flex'>
              {
                links.techImageSrc.map(link => <img src={link} className="icon"/>)
              }
          </ul>
        </div>

        <ul className='flex justify-evenly items-center w-full text-sm'>
          {main.published ? <li><a href={links.live} target="_blank" className='underline flex'> View Live <FiRss/></a></li> : null}
          <li><a href={links.repo} target="_blank" className='underline flex'> Code <FiCode/></a></li>
        </ul>
      </div>
    </section>
  );
};

export default ProjectCard;

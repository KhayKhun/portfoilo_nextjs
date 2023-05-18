import React from 'react'
import ProjectCard from './cards/projectCard';

async function fetchPj(){
    const response = await fetch('https://portfolio-nextjs-khaykhun.vercel.app/api/projects',{
      headers: {
        'Cache-Control': 'no-store',
      },
    });
    const data = await response.json();
    return data;
}

const ProjectsComponent = async () => {
    const data = await fetchPj();
return (
    <div className='flex flex-col items-center'>
      <h1 className='text-md md:text-2xl lg:text-4xl font-bold mb-[20px]'>Projects I have done so far ~</h1>
      <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px] w-full px-[40px]'>
        {
            data.map(d => <ProjectCard key={d.main.id} data={d}/>)
        }
      </ul>
    </div>
  )
}

export default ProjectsComponent

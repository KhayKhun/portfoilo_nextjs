import React from 'react'
import ProjectCard from './cards/projectCard';

async function fetchPj(){
    const response = await fetch('/api/projects',{
      headers: {
        'Cache-Control': 'no-store',
      },
    });
    const data = await response.json();
    // console.log(data);
    return data;
}

const ProjectsComponent = async () => {
    const data = await fetchPj();
return (
    <div className='flex flex-col items-center'>
      <h1 className='font-3xl font-bold mb-[20px]'>Projects I have done so far ~</h1>
      <ul className='grid grid-cols-4 gap-[8px] w-full px-[40px]'>
        {
            data.map(d => <ProjectCard key={d.main.id} data={d}/>)
        }
      </ul>
    </div>
  )
}

export default ProjectsComponent

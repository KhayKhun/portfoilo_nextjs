import dynamic from 'next/dynamic'
import LoadingComponent from '@/components/Loading'
const ProjectsComponent = dynamic(()=> import('@/components/projects'),{
  loading : ()=> <LoadingComponent/>,
  ssr : false
})

const ProjectsPage = () => {
  return (
    <div className='py-[60px]'>
        <ProjectsComponent/>
    </div>
  )
}

export default ProjectsPage
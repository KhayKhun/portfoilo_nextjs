import React from 'react'

const LoadingComponent = () => {
  return (
    <div className='w-screen h-screen z-[1000] fixed flex justify-center items-center'>
        <div className='loading w-[80px] h-[80px] border-[10px] rounded-full border-blue-100 border-r-blue-400 border-t-blue-600 border-l-white'/>
    </div>
  )
}

export default LoadingComponent
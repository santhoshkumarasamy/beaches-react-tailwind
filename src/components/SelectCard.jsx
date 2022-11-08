import React from 'react'

const SelectCard = ({image,title}) => {
  return (
    
      <div className='relative h-full w-full'>
        <img className=' object-cover h-full w-full' src={image} alt={title} />
        <div className='w-full h-full top-0 left-0 absolute bg-gray-900/30'>
            <p className=' bottom-0 left-0 text-2xl text-white  absolute py-4 px-2 font-semibold'>{title}</p>
        </div>
      </div>
    
  )
}

export default SelectCard

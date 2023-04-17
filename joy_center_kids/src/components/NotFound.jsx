import React from 'react'

export const NotFound = () => {
  return (
    <>
    <div className='centered flex flex-col items-center relative gap-[3rem]'>
        <div className='w-fit'><p>Lo siento, no se encontró ningún artículo</p></div>
        <div className='relative emoji rounded-full w-[250px] h-[250px] border-[.8rem] border-[#bdc3c7]'>
          <span className='absolute'></span>
          <span className='absolute'></span>
          <span className='absolute'></span>
        </div>
      </div>

    </>
  )
}

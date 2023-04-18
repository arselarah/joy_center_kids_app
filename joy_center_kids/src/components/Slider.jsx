import React, { useState } from 'react'

export const Slider = ({ children: slides }) => {
    const[currentIndex, setCurrentIndex] = useState(0)

    const prev = () => 
        setCurrentIndex((currentIndex) => (currentIndex === 0 ? slides.length - 1 : currentIndex - 1)
        )

    const next = () => 
        setCurrentIndex((currentIndex) => (currentIndex ===  slides.length - 1 ? 0 : currentIndex + 1))

  return (
    <>
    <div className="overflow-hidden relative group">
        <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>{slides}</div>
        <div className='absolute inset-x-0 top-[50%] translate-y-[-50%] flex items-center justify-between p-4 duration-1000 max-h-16 align-middle'>
            <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 hover:bg-white duration-500'>
            <svg class="feather feather-chevron-left" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button onClick={next} className='p-1 rounded-full shadow bg-white/80 hover:bg-white duration-500'>
            <svg class="feather feather-chevron-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
        </div>
    </div>
    </>
  )
}

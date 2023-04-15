import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const Search = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

function handleSearch(e){
    e.preventDefault();
    console.log({search})
    setSearch("")
    let value = search.trim().replace(/\s+/g, '-').toLocaleLowerCase();
    console.log({value})
    navigate(`/news/search/${value}`)
}


  return (
    <>
    <form className='search mb-[2rem]' onSubmit={handleSearch} >
        <div className="flex gap-[1rem] justify-center">
            <input type="search" placeholder='Buscar...' required value={search} onChange={e => setSearch(e.target.value) } className='rounded-full py-[0.5rem] px-[1.5rem] w-full xm:max-w-[200px] md:max-w-[300px] lg:max-w-[460px]' />
            <button className='call-to-action solid orange' type='submit'>Buscar</button>
        </div>
    </form>
    </>
  )
}

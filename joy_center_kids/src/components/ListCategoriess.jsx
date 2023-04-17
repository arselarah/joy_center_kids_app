import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { graphcms, QUERY_SLUG_CATEGORIES } from '../Graphql/Queries'


export const Categos = () => {
    const { pathname } = useLocation();
    const [categories, setCategories] = useState([])

  useEffect(() => {
      graphcms.request(QUERY_SLUG_CATEGORIES)
      .then(res => setCategories(res.categories))
  }, [])

  return (
    <> 
    <div className="categories py-[2rem]">
      <div className="centered side-padding flex flex-wrap items-center justify-center ">
      <h3 className='px-[2rem] py-[1rem]'>Buscar por categorías:</h3>
        <ul className='flex flex-wrap'>
            <li className='px-[1rem] py-[0.5rem]'>
                <NavLink className='hover:text-[var(--color-button-one)]' to="/news">Todas las categorías</NavLink>
            </li>
            {
              categories?.map(category => (
                <li className='px-[1rem] py-[0.5rem]' key={category.id} >
                  <NavLink className='hover:text-[var(--color-button-one)]' to={`/news/posts/${category.slug}`}>
                    {category.name}
                  </NavLink>
                </li>
              ))
            }

        </ul>

      </div>
    </div>
    </>
  )
}

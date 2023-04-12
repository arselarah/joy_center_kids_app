import React from 'react'
import { useState, useEffect } from 'react'
import { Categos } from '../../components/ListCategoriess'
import { graphcms, QUERY_POSTS } from '../../Graphql/Queries'
import { Posts } from '../../components/Posts'
import { Route, Routes } from 'react-router-dom'
import { PostedByCategory } from './PostedByCategory'
import { Search } from '../../components/Search'
import { SearchResult } from './SearchResult'
import { Article } from './Article'
import { useMyContext } from '../../context/store'
import { motion as m } from 'framer-motion'
import { NotFound } from '../../components/NotFound'

export const News = () => {

  const value = useMyContext()
   //console.log(value)

  const [posts, setPosts] = useState([])

  useEffect(() => {
      graphcms.request(QUERY_POSTS)
      .then(res => setPosts(res.posts))
  }, [])
   
  return (
    <m.div className='min-h-screen'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
    <Categos/>
    <div className="centered">
      <Search />
    </div>
    <Routes>
      <Route path={"/"} element={<Posts posts={posts} />}/>
      <Route path={"/posts/:slug"} element={<PostedByCategory />}/>
      <Route path={"/search/:slug"} element={<SearchResult />}/>
      <Route path={"/article/:slug"} element={<Article />}/>
      <Route path={""} element={<NotFound />}/>
     </Routes>
    </m.div>
  )
}

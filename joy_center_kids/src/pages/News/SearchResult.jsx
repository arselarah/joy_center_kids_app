import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { graphcms, QUERY_SEARCH_POSTS } from '../../Graphql/Queries'
import { Posts } from '../../components/Posts'

export const SearchResult = () => {
    const { slug } = useParams()
    const [posts, setPosts] = useState([])

    // console.log({slug})
    
    useEffect(() => {
        graphcms.request(QUERY_SEARCH_POSTS, { slug })
        .then(res => setPosts(res.posts))
        // console.log(slug)
    }, [slug])

  return (
    <React.Fragment>
    <Posts posts={posts} />
    </React.Fragment>
  )
}

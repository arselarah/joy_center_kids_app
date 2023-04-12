import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { graphcms, QUERY_POSTS } from '../Graphql/Queries'
import { Post } from './Post'
import { Posts } from './Posts'
import { Link } from 'react-router-dom'

export const Pagination = () => {
    const { slug } = useParams()
    const [posts, setPosts] = useState([])

    // console.log({slug})
    
    useEffect(() => {
        graphcms.request(QUERY_POSTS, { slug })
        .then(res => setPosts(res.posts))
        // console.log(slug)
    }, [slug])

  return (
    <>
    {
        posts?.map(post => (
            <div>
                <Link to={post.slug}>{post.title}</Link>
            </div>
        ))
    }
    </>
  )
}

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { graphcms, QUERY_POSTS_BY_CATEGORY } from '../../Graphql/Queries'
import { Posts } from '../../components/Posts'

export const PostedByCategory  = () => {
    const { slug } = useParams()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        graphcms.request(QUERY_POSTS_BY_CATEGORY, { slug })
        .then(res => setPosts(res.posts))
    }, [slug])
  return (
    <React.Fragment>
    <Posts posts={posts} />
    </React.Fragment>
  )
}

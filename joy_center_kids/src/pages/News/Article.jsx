import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { graphcms, QUERY_ONE_POST } from '../../Graphql/Queries'
import { Post } from '../../components/Post'

export const Article = () => {
    const { slug } = useParams()
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        graphcms.request(QUERY_ONE_POST, { slug })
        .then(res => setPosts(res.posts))
    }, [slug])

  return (
    <>
        {
            posts?.map(post => (
                <React.Fragment key={post.id}>
                    <Post post={post} />
                </React.Fragment>
            ))
        }
    </>
  )
}

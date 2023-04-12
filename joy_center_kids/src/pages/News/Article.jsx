import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { graphcms, QUERY_ONE_POST } from '../../Graphql/Queries'
import { Posts } from '../../components/Posts'
import { Post } from '../../components/Post'
import { Comments } from '../../components/Comments'

export const Article = () => {
    const { slug } = useParams()
    const [posts, setPosts] = useState([])

    // console.log(slug)
    
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
                    {/* <Comments /> */}
                </React.Fragment>
            ))
        }
    </>
  )
}

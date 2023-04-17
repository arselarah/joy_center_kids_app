import React from 'react'
import { Pagination } from './Pagination'
import { Link } from 'react-router-dom'

export const Post = ({post}) => {
   // console.log(post)
  return (
    <>
    <div className="centered side-padding">
       
        <article className='max-w-4xl ml-[auto] mr-[auto]'>
        <Link className='back-icon relative' to={'/news'}>Regresar</Link>
            <div className='mt-[4rem] overflow-hidden rounded-[2rem]'>
                <img src={post.coverPhoto.url} />
            </div>
            <div>
                <h3 className='text-4xl  pt-[4rem] pb-[2rem]'>{post.title}</h3>
            </div>
            <div className="published-date">
                <span className='block text-[13px] pb-[2rem]'>{new Date(post.updatedAt).toDateString()}</span>
            </div>
            <div className='post__content' dangerouslySetInnerHTML={{__html: post.content.html}}>

            </div>
            
            <Link className='back-icon relative' to={'/news'}>Regresar</Link>
        </article>
    </div>
    </>
  )
}

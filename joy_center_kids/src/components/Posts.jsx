import React from 'react'
import { Link } from 'react-router-dom'

export const Posts = ({posts}) => {
  return (
    <>
    <div className="posts xm:py-[4rem] md:py-[6rem]">
      <div className="centered side-padding flex flex-wrap ">
      {
        posts?.map(post => (
          <div className="posts__card flex-0 xm:basis-[100%] md:basis-[50%] lg:basis-[33%] px-[1rem] pb-[2rem]" key={post.id}>
            <div className="post-box bg-white rounded-[2rem] relative overflow-hidden">
              <div className="posts__coverPhoto  overflow-hidden ">
                <Link to={`/news/article/${post.slug}`}>
                  <img className='min-w-full object-cover object-center max-h-[300px] min-h-[350px]' src={post.coverPhoto.url} alt={post.slug} />
                </Link>
              </div>

              <div className="categories p-[1rem]">
                <span className="published-date pb-[1rem] text-xs block">
                  {new Date(post.updatedAt).toDateString()}
                </span>
                {
                  post.categories?.map(category => (
                    <Link to={`/news/posts/${category.slug}`} key={category.id} className='post-category mr-[1rem] py-[0.5rem] px-[1rem] text-xs text-white font-semibold rounded-full inline-block mb-[.5rem]' style={{background: category.color.css}}>
                      {category.name}
                    </Link>
                  ))
                }
              </div>
              <Link to={`/news/article/${post.slug}`}>
                <h3 className='text-2xl px-[1rem]'>{post.title}</h3>
              </Link>
              <p className='excerpt px-[1rem] pt-[1rem] pb-[2rem]' >{post.description}</p>
            </div>

          </div>
        ))
      }

      </div>
    </div>
    </>
  )
}

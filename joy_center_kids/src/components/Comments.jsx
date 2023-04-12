import React from 'react'

export const Comments = () => {
  return (
    <>
    <div className="centered">
        <article className='max-w-4xl ml-[auto] mr-[auto]'>
            <h3>Deja un comentario</h3>
            <form>
                <input type="text" placeholder='Nombre' />
            </form>
        </article>
    </div>
    </>
  )
}

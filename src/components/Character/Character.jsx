import React from 'react'

export default function Character({animal}) {
    return (
        <section style={{display: 'flex', flexDirection: 'column'}}>
            <article
            className='animal'
            style={{
                backgroundImage: `url(./images/${animal}-head.png)`,
                height: 200,
                width: 200,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            ></article>


        </section>
    )
}

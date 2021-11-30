import React from 'react'

export default function Character({animal, shirt, pant, shoe}) {
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
            <article
            className='shirt'
            style={{
                backgroundImage: `url(./images/${shirt}-shirt.png)`,
                height: 200,
                width: 200,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            ></article>
               <article
            className='pant'
            style={{
                backgroundImage: `url(./images/${pant}-pants.png)`,
                height: 200,
                width: 200,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            ></article>       
            <article
            className='shoe'
            style={{
                backgroundImage: `url(./images/${shoe}-shoes.png)`,
                height: 200,
                width: 200,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            ></article>
        </section>
    )
}

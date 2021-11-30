import React from 'react'

export default function Character({animal, shirt, pant, shoe}) {
    return (
        // I double checked as to how Vonta did CSS in a js/html setting, mostly because it was handy to style it all here so that everything would render correctly the first time. but, this is the page that the pictures will be called to. We have the state passed down here and then we will call it in the images.
        //I will move the CSS into a better folder later, hopefully before I get to the character testing. But, for right now, I just wanted to check to make sure everything was good to go. 
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

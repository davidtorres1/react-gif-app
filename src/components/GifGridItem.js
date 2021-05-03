import React from 'react'

export const GifGridItem = ({id, title, url, index}) => {

    return (
        <div className={`card animate__animated animate__fadeIn animate__delay-${Math.ceil(index*.5)}s`}>
            <img src={ url } alt={ title } ></img>
            <p>{ title }</p>
        </div>
    )
}

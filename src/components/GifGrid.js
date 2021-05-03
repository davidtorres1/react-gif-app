import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    const { data: images ,loading } = useFetchGifs( category )
    
    return (
        <div>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p>Loading...</p> }

            <div className="gifGrid">
                {
                    images.map( (img, index) => (
                        <GifGridItem key={ img.id } index={ index } { ...img } />
                    ))
                }
            </div>
            
        </div>
    )
}

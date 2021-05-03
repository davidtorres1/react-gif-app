import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export  const GifExpertApp = () => {

    const [categories, setCategories] = useState(['OnePunch'])

    return (<>

        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        <hr />  

        <ol>
            { categories.map(element => 
                <GifGrid 
                    key= { element }
                    category={ element } 
                />) 
            }
        </ol>

    </>)
}
import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('Ingresa una nueva categoria...')

    const handleSubmit = e => {
        e.preventDefault() 

        if( inputValue.trim().length > 2) {
            setCategories( prev => [inputValue, ...prev])
            setinputValue('')
        }

    }

    return (
        
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                value={ inputValue }
                onChange={ input =>  setinputValue(input.target.value) }
                onFocus={ () => setinputValue('') }
                
            />
        </form>
        
    )
}



AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
import { useState } from "react"


export const AddCategory = ( { onNewValue } ) => {

    const [inputValue, setInputValue ] = useState('');

    const handleInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if ( inputValue.trim().length <= 1) return;
        //setCategories(categories => [...categories, inputValue]);

        onNewValue(inputValue.trim());
        setInputValue('');
    }


  return (
    <form onSubmit={ handleSubmit }>
        <input 
            type="text" 
            placeholder="Buscar gifs" 
            value={ inputValue }
            onChange={ handleInputChange }
        />
    </form>
    
  )
}



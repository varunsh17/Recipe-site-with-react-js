import React from 'react'
import Style from './recipe.module.css'
const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={Style.recipe}>
            <h1>{title}</h1>
            <p>CALORIES: {calories}</p>
            <ol>
                {ingredients.map(ingredient => (
                    
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img className={Style.image} src={image} alt='' />
        </div>
    )
}

export default Recipe

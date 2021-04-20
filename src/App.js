import React, { useEffect, useState } from 'react';
import './App.css'
import Recipe from './comp/Recipe'
const App = () => {
  const APP_ID = '26362fdd'
  const APP_KEY = '5b1687b18d0a72b6d8e3c06a65028b45'

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes()
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json()
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input type='text'
          value={search}
          onChange={updateSearch} />
        <button type='submit' className='search-button'>search</button>
      </form>
      
      {recipes.map(recipe => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients} />
      ))}
    </div>
  )
}


export default App






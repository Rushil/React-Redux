import React, {useEffect, useState} from "react";
import {Formik} from "formik";
import Recipe from "./Recipe";
import app from "./App.css"

const App = () => {
  const APP_ID = "c5bf61f9";
  const APP_KEY = "c58964256baa8be81ade958e39297dd4";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() =>{
    getRecipes();
  }, [query]);
  
 const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data = await response.json();
    setRecipes(data.hits);
 };

 const updateSearch  = (e) => {
    setSearch(e.target.value);
 };

 const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
 }

  return (
    <div className="app"> 
      <h1>Search for Recipes!</h1>
     
        <form onSubmit = {getSearch} className ="search-form">
          <input className = "search-bar" type = "text" value={search} onChange= {updateSearch}/>
          <button className = "search-button"  >Search</button>
        </form>
        <div className="recipe">
        {recipes.map(recipe => (
          <Recipe 
          title = {recipe.recipe.label}
          calories = {recipe.recipe.calories}
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
           />
        ))}
        </div>
    
    </div>
    );
}

export default App;
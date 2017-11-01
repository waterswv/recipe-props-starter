import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe
          title={"pasta", "Avocado Toast"}
          ingredients={['flour', 'water'], ['toast', 'avocado']}
          instructions={"Mix ingredients", "Toast bread, mash avocado, and spread mash over toast"}
          img={"spaghetti.jpg", "spaghetti.jpg"}
          />
      </div>
    );
  }
}

export default RecipeApp;

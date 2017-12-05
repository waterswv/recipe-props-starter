import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeApp.css';
import Nav from './Nav';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: [
        {
          id: 0,
          title: "Spaghetti",
          instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
          ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
          img: "spaghetti.jpg"
        },
        {
          id: 1,
          title: "Milkshake",
          instructions: "Combine ice cream and milk.  Blend until creamy",
          ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
          img: "milkshake.jpg"
        },
        {
          id: 2,
          title: "Avocado Toast",
          instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          img: "avocado_toast.jpg"
        }
      ]
    }
  }
  render() {
    const recipes = this.props.recipes.map((r, index) => (
        <Recipe key={index} {...r}/>
      ));
    return (
      <div className="App">
        <Nav />
        <div className="Recipe-App">
          {recipes}
        </div>
      </div>
    );
  }
}

export default RecipeApp;

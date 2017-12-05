import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeApp.css';
import Nav from './Nav';

class RecipeApp extends Component {
  static defaultProps = {
    recipes : [
      {
        title: "pasta",
        ingredients: ['flour', 'water'],
        instructions: "Mix ingredients",
        img: 'spaghetti.jpg'
      },
      {
        title: "Avocado Toast",
        ingredients: ['avocado', 'toast'],
        instructions: "Toast bread, mash avocado, and spread mash over toast",
        img: 'spaghetti.jpg'
      }
    ]
  }

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object)
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

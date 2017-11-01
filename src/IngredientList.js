import React, {Component} from 'react';
import './IngredientList.css';

class IngredientList extends Component {

  render() {

    const ingredients = this.props.ingredients.map((ing, index) => (
      <li key={index}>{ing}</li>
      ));

    return (
      <div>
        {ingredients}
      </div>
    );
  }
}

export default IngredientList;

import React, { Component } from 'react';
import '../App.css';
import IngredientList from './IngredientList';

class Recipe extends Component {
  render() {
    return (
      <div>
        <a className="recipe-link">
          <div className="recipe-name">
            <h1>Pumpkin Pie</h1>
          </div>
        </a>
        <IngredientList shouldHide={false} />
      </div>
    );
  }
}

export default Recipe;

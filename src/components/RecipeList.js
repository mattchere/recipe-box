import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipeList extends Component {
  render() {
    return (
      <div className="recipe-list">
        <ul>
          <li><Recipe /></li>
        </ul>
      </div>
    )
  }
}

export default RecipeList;

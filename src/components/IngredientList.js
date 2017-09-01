import React, { Component } from 'react';
import '../App.css';

class IngredientList extends Component {
  render() {
    return (
      <div className={this.props.shouldHide ? 'hidden ingredient-container': 'ingredient-container'}>
        <h1 className="ingredient-title">Ingredients</h1>
        <hr />
        <ul className="ingredient-list">
          <li>Thing</li>
          <li>Thing</li>
          <li>Thing</li>
          <li>Thing</li>
          <li>Thing</li>
        </ul>
        <button>Delete</button>
        <button>Edit</button>
      </div>
    );
  }
}

export default IngredientList;

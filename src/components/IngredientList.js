import React, { Component } from 'react';
import '../App.css';

class IngredientList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.deleteRecipe(this.props.title);
  }

  render() {
    return (
      <div className={this.props.hidden ? 'hidden ingredient-container': 'ingredient-container'}>
        <h1 className="ingredient-title">Ingredients</h1>
        <hr />
        <ul className="ingredient-list">
          {this.props.ingredients.map((ing, i) => {
            return <li key={i}>{ing}</li>
          })}
        </ul>
        <button onClick={this.handleClick}>Delete</button>
        <button>Edit</button>
      </div>
    );
  }
}

export default IngredientList;

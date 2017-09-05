import React, { Component } from 'react';
import '../App.css';
import IngredientList from './IngredientList';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.hide(this.props.title);
  }


  render() {
    return (
      <div>
        <a className="recipe-link" onClick={this.handleClick}>
          <div className="recipe-name">
            <h1>{this.props.title}</h1>
          </div>
        </a>
        <IngredientList 
          hidden={this.props.hidden} 
          ingredients={this.props.ingredients} 
          title={this.props.title}
          deleteRecipe={this.props.deleteRecipe}
          editModal={this.props.editModal}
        />
      </div>
    );
  }
}

export default Recipe;

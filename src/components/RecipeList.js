import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipeList extends Component {
  render() {
    return (
      <div className="recipe-list">
        <ul>
          {this.props.recipes.map((rec, i) => {
            return (
              <li key={i}>
                <Recipe 
                  title={rec.title} 
                  ingredients={rec.ingredients} 
                  hidden={rec.hidden} 
                  hide={this.props.hide}
                  deleteRecipe={this.props.deleteRecipe}
                  editModal={this.props.editModal} />
              </li>)
          })}
        </ul>
      </div>
    )
  }
}

export default RecipeList;

import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [{
        title: 'One',
        ingredients: ['test', 'test', 'test'],
        hidden: true
      },
      {
        title: 'Two',
        ingredients: ['test', 'test', 'test'],
        hidden: true
      },
      {
        title: 'Three',
        ingredients: ['test', 'test', 'test'],
        hidden: true
      }]
    }
    this.hideIngredients = this.hideIngredients.bind(this);
  }

  hideIngredients(title) {
    const newRecipes = 
      this.state.recipes.map(recipe => {
        if (recipe.title === title) {
          return {
            title: recipe.title,
            ingredients: recipe.ingredients,
            hidden: recipe.hidden ? false : true
          }
        }
        return recipe
      });

    this.setState({
      recipes: newRecipes
    });
  }

  render() {
    return (
      <div className="App">
        <RecipeList recipes={this.state.recipes} hide={this.hideIngredients} />
        <button>Add Recipe</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import {Modal} from 'react-bootstrap';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

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
      }],
      newRecipe: {
        name: "",
        ingredients: ""
      }
    }
    this.hideIngredients = this.hideIngredients.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeIngredients = this.handleChangeIngredients.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
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

  open() {
    this.setState({showModal: true});
  }

  close() {
    this.setState({showModal: false});
  }

  addRecipe() {
    const recipe = {
      title: this.state.newRecipe.name,
      ingredients: this.state.newRecipe.ingredients.split(','),
      hidden: true
    }
    this.setState({
      recipes: this.state.recipes.concat([recipe]),
      newRecipe: {
        name: "",
        ingredients: ""
      }
    });
    this.close();
  }

  handleChangeName(e) {
    this.setState({
      newRecipe: {
        name: e.target.value,
        ingredients: this.state.newRecipe.ingredients
      }
    });
  }

  handleChangeIngredients(e) {
    this.setState({
      newRecipe: {
        name: this.state.newRecipe.name,
        ingredients: e.target.value
      }
    });
  }

  deleteRecipe(title) {
    const resultingRecipes = this.state.recipes.filter(rec => rec.title !== title);
    this.setState({
      recipes: resultingRecipes
    });
  }

  render() {
    return (
      <div className="App">
        <RecipeList 
          recipes={this.state.recipes} 
          hide={this.hideIngredients} 
          deleteRecipe={this.deleteRecipe}
        />
        <button onClick={this.open}>Add Recipe</button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup controlId="recipeForm">
                <ControlLabel>Recipe</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.newRecipe.name}
                  placeholder="Recipe Name"
                  onChange={this.handleChangeName}
                />
                <ControlLabel>Recipe</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.newRecipe.ingredients}
                  placeholder="Recipe Name"
                  onChange={this.handleChangeIngredients}
                />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.addRecipe}>Add Recipe</button>
            <button onClick={this.close}>Close</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;

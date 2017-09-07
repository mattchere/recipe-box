import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import {Modal} from 'react-bootstrap';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';

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
      },
      editRecipe: {
        originalTitle: "",
        name: "",
        ingredients: ""
      }
    }
    this.hideIngredients = this.hideIngredients.bind(this);
    this.openAddModal = this.openAddModal.bind(this);
    this.closeAddModal = this.closeAddModal.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeIngredients = this.handleChangeIngredients.bind(this);
    this.handleChangeEditName = this.handleChangeEditName.bind(this);
    this.handleChangeEditIngredients = this.handleChangeEditIngredients.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.editModal = this.editModal.bind(this);
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

  openAddModal() {
    this.setState({showAddModal: true});
  }

  closeAddModal() {
    this.setState({showAddModal: false});
  }

  openEditModal() {
    this.setState({showEditModal: true});
  }

  closeEditModal() {
    this.setState({showEditModal: false});
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
    this.closeAddModal();
  }

  handleChangeName(e) {
    e.preventDefault();
    this.setState({
      newRecipe: {
        name: e.target.value,
        ingredients: this.state.newRecipe.ingredients
      }
    });
  }

  handleChangeIngredients(e) {
    e.preventDefault();    
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

  editRecipe() {
    const recipe = {
      title: this.state.editRecipe.name,
      ingredients: this.state.editRecipe.ingredients.split(','),
      hidden: false
    }
    const newRecipes = this.state.recipes.map(rec =>
    rec.title === this.state.editRecipe.originalTitle ? recipe: rec);
    console.log(newRecipes);
    this.setState({
      recipes: newRecipes,
      editRecipe: {
        originalTitle: "",
        name: "",
        ingredients: ""
      }
    });
    this.closeEditModal();
  }

  editModal(title) {
    const recipe = this.state.recipes.filter(rec => rec.title === title)[0];
    console.log(recipe);
    this.setState({
      editRecipe: {
        originalTitle: recipe.title,
        name: recipe.title,
        ingredients: recipe.ingredients.join()
      }
    })
    this.openEditModal();
  }

  handleChangeEditName(e) {
    e.preventDefault();    
    this.setState({
      editRecipe: {
        originalTitle: this.state.editRecipe.originalTitle,
        name: e.target.value,
        ingredients: this.state.editRecipe.ingredients
      }
    });
  }

  handleChangeEditIngredients(e) {
    e.preventDefault();    
    this.setState({
      editRecipe: {
        originalTitle: this.state.editRecipe.originalTitle,
        name: this.state.editRecipe.name,
        ingredients: e.target.value
      }
    });
  }
  componentWillMount() {
    if (localStorage.getItem('state') === null) {
      localStorage.setItem('state', JSON.stringify(this.state));
    }
    else {
      const store = localStorage.getItem('state');
      this.setState(JSON.parse(store));
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('state', JSON.stringify(nextState));
  }

  render() {
    return (
      <div className="App">
        <RecipeList 
          recipes={this.state.recipes} 
          hide={this.hideIngredients} 
          deleteRecipe={this.deleteRecipe}
          editModal={this.editModal}
        />
        <Button bsStyle="primary" onClick={this.openAddModal}>Add Recipe</Button>

        <Modal show={this.state.showAddModal} onHide={this.closeAddModal}>
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
                <ControlLabel>Ingredients</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.newRecipe.ingredients}
                  placeholder="Enter Ingredients,Separated,By,Commas"
                  onChange={this.handleChangeIngredients}
                />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
              <Button bsStyle="success" onClick={this.addRecipe}>Add Recipe</Button>
              <Button bsStyle="danger" onClick={this.closeAddModal}>Close</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showEditModal} onHide={this.closeEditModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup controlId="recipeForm">
                <ControlLabel>Recipe</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.editRecipe.name}
                  placeholder="Recipe Name"
                  onChange={this.handleChangeEditName}
                />
                <ControlLabel>Ingredients</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.editRecipe.ingredients}
                  placeholder="Enter Ingredients,Separated,By,Commas"
                  onChange={this.handleChangeEditIngredients}
                />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
              <Button bsStyle="success" onClick={this.editRecipe}>Edit Recipe</Button>
              <Button bsStyle="danger" onClick={this.closeEditModal}>Close</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

export default App;

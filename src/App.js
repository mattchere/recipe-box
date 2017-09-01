import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipeList />
        <button>Add Recipe</button>
      </div>
    );
  }
}

export default App;

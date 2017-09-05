import React, { Component } from 'react';
import '../App.css';

class IngredientList extends Component {
  constructor(props) {
    super(props);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
  }

  handleClickDelete(e) {
    this.props.deleteRecipe(this.props.title);
  }

  handleClickEdit(e) {
    this.props.editModal(this.props.title);
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
        <button onClick={this.handleClickDelete}>Delete</button>
        <button onClick={this.handleClickEdit}>Edit</button>
      </div>
    );
  }
}

export default IngredientList;

import React from "react";

import "./todolist.css";

import TodoItems from "./todoitems";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  //function to add task
  addItem(e) {
    if (this._inputElement.value !== "") {
      //entered text plus the date as key
      let newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          //setting the state by giving it both the existing items and new ones
          items: prevState.items.concat(newItem),
        };
      });

      //clearing the state value for the next input value
      this._inputElement.value = "";
    }

    console.log(this.state.items);

    //prevent event default action
    e.preventDefault();
  }

  //function to delete item
  deleteItem(key) {
    let filteredItems = this.state.items.filter((item) => {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={(a) => (this._inputElement = a)}
              placeholder="Enter Task"
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;

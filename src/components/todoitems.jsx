import React from "react";

class TodoItems extends React.Component {
  constructor(props) {
    super(props);

    this.createTask = this.createTask.bind(this);
  }

  createTask(item) {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    let todoEntries = this.props.entries; //state passed as props
    let listItems = todoEntries.map(this.createTask); //an array of li items

    //display the list to client side
    return <ul className="theList">{listItems}</ul>;
  }
}

export default TodoItems;

import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Complete CC9"},
      {id: 2, content: "Finish Net Ninja Todo App"},
      {id: 3, content: "Review Tic Tac Toe and Robofriends"}
    ]
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos:</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;

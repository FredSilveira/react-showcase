import React, { Component } from 'react';
import './App.css';
import { CardList } from "./components/cardList/cardList";


class App extends Component {
  constructor() {
    super();

    this.state = {
      peeps: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ peeps: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList>
          {this.state.peeps.map(e => (
            <h1 key={e.id}> {e.name} </h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;

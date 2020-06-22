import React, { Component } from 'react';
import './App.css';
import { CardList } from "./components/cardList/cardList.jsx"


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
        <CardList peeps={this.state.peeps}/>
      </div>
    );
  }
}

export default App;

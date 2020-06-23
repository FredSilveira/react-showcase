import React, { Component } from 'react';
import './App.css';
import { CardList } from "./components/cardList/cardList.jsx"


class App extends Component {
  constructor() {
    super();

    this.state = {
      peeps: [],
      search: ''
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
        <input type="search" placeholder="search strange peeps" onChange={e => {
          this.setState({ search: e.target.value });
        }} />
        <CardList peeps={this.state.peeps}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { CardList } from "./components/cardList/cardList.jsx";
import { SearchBox } from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      peeps: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ peeps: users }));
  }

  handleChange = (e) => {
      this.setState({ searchField: e.target.value })
  }

  render() {
    const { peeps, searchField } = this.state;
    const filteredPeeps = peeps.filter( peep => peep.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <SearchBox
          placeholder={"search strange peeps"}
          handleChange={ this.handleChange } />
        <CardList peeps={filteredPeeps}/>
      </div>
    );
  }
}

export default App;

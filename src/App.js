import React, { Component } from 'react';
import SearchInput from './components/searchInput'

//import './App.css';

class App extends Component {

  constructor(props) {
      super(props);

      this.state = {searchText: '', results:[]}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SearchInput></SearchInput>
        </header>
      </div>
    );
  }
}

export default App;

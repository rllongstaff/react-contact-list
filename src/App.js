import React, { Component } from 'react';
import SearchBox from './SearchBox';
import ContactList from './ContactList';
import './App.css';
import { contacts } from './contacts';

class App extends Component {
  render() {
    return (
      <div className="tc">
        <header>
          <h1>Contact List</h1>
        </header>
        <p>Search for a contact from the list below:</p>
        <SearchBox />
        <ContactList />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import ContactList from '../components/ContactList';
import Scroll from '../components/Scroll';
import './App.css';


// a smart component
class App extends Component {
  constructor() {
    super();
    this.state= {
      contacts: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({contacts: users})); 
  }

  onSearchChange= (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { contacts, searchfield } = this.state;
    const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if (!contacts.length) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="tc">
          <header className="bg-light-blue pa3">
            <h1>Contact List</h1>
          </header>
          <p>Search for a contact from the list below:</p>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <div className="pa4">
              <div className="overflow-auto">
                <table className="f6 w-100 mw8 center" cellSpacing="0">
                  <thead>
                    <tr className="stripe-dark">
                      <th className="fw6 tl pa3 bg-white">Name</th>
                      <th className="fw6 tl pa3 bg-white">Phone</th>
                      <th className="fw6 tl pa3 bg-white">Address Suite</th>
                      <th className="fw6 tl pa3 bg-white">Username</th>                  
                      <th className="fw6 tl pa3 bg-white">Email</th>
                    </tr>
                  </thead>
                    <ContactList contacts={filteredContacts} />
                </table>
              </div>
            </div>
          </Scroll>          
          <footer className="bg-blue pa3">
            <p>&copy;2018 Russell Longstaff;</p>
          </footer>
        </div>
      );
    }
  }
}

export default App;

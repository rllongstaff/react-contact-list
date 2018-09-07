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

        <div class="pa4">
          <div class="overflow-auto">
            <table class="f6 w-100 mw8 center" cellspacing="0">
              <thead>
                <tr class="stripe-dark">
                  <th class="fw6 tl pa3 bg-white">Name</th>
                  <th class="fw6 t1 pa3 bg-white">Ext</th>
                  <th class="fw6 tl pa3 bg-white">Direct Line</th>
                  <th class="fw6 t1 pa3 bg-white">Department</th>
                  <th class="fw6 tl pa3 bg-white">Title</th>                  
                  <th class="fw6 tl pa3 bg-white">Email</th>
                </tr>
              </thead>
                <ContactList contacts={contacts} />
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

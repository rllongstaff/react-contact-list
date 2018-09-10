import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts }) => {
    const contactsArray = contacts.map((contact, i) => {
        return (
            <Contact 
                key={contacts[i].id}
                id={contacts[i].id}
                name={contacts[i].name}
                phone={contacts[i].phone}
                dept={contacts[i].address.suite}
                username={contacts[i].username}
                email={contacts[i].email}
            />
        );
    })
    return (
        <tbody className="lh-copy">
            {contactsArray}
        </tbody>        
    );
}

export default ContactList;
import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts }) => {
    const contactsArray = contacts.map((contact, i) => {
        return (
            <Contact 
                key={contacts[i].id}
                id={contacts[i].id}
                name={contacts[i].name}
                ext={contacts[i].ext}
                telephone={contacts[i].telephone}
                dept={contacts[i].dept}
                title={contacts[i].title}
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
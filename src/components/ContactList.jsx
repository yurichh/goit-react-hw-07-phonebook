import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../redux/selectors';
import ContactItem from './ContactItem';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className="contacts-list">
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contactData={contact} />
      ))}
    </ul>
  );
};

export default ContactList;

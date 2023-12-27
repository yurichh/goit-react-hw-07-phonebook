import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../redux/selectors';
import ContactItem from './ContactItem';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const reversedContacts = [...filteredContacts].reverse();
  return (
    <ul className="contacts-list">
      {reversedContacts.map(contact => (
        <ContactItem key={contact.id} contactData={contact} />
      ))}
    </ul>
  );
};

export default ContactList;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../redux/contactsSlice';
import {
  selectContacts,
  selectFilteredContacts,
} from '../redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);

  const handleDelete = id => {
    if (contacts) {
      dispatch(removeContact(id));
    }
  };

  return (
    <ul className="contacts-list">
      {filteredContacts.map(({ name, number, id }) => (
        <li id={id} key={id} className="contacts-item">
          <p className="contacts-item-name">
            {name}:<span className="contacts-item-number">{number}</span>
          </p>
          <button
            onClick={() => {
              handleDelete(id);
            }}
            className="delete-btn"
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

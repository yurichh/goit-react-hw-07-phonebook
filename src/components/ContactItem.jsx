import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../redux/operations';

const ContactItem = ({ contactData }) => {
  const dispatch = useDispatch();

  const { id, name, phone } = contactData;

  const handleDelete = () => {
    dispatch(removeContact(id));
  };

  return (
    <li className="contacts-item">
      <p className="contacts-item-name">
        {name} :<span className="contacts-item-number">{phone}</span>
      </p>
      <button onClick={handleDelete} className="delete-btn">
        Delete contact
      </button>
    </li>
  );
};

export default ContactItem;

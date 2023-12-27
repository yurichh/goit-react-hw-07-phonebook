import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';

const App = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <section className="contacts-wrapper">
        <h1 className="title">Contacts</h1>
        <Filter />
        {error ? (
          <p>{error}</p>
        ) : (
          (isLoading && <span className="loader"></span>) || <ContactList />
        )}
      </section>
    </>
  );
};

export default App;

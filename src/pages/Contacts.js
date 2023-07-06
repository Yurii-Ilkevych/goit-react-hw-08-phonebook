import { PrimaryTittle, SecondTittle, Wrapper } from 'components/App.styled';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const Contacts = () => {
  return (
    <Wrapper>
      <PrimaryTittle>Phonebook</PrimaryTittle>
      <ContactForm />

      <SecondTittle>Contacts</SecondTittle>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

export default Contacts;

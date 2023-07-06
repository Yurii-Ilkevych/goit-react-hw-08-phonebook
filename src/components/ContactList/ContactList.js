import { Wrapper, List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/contactsSelectors';
import { ThreeDots } from 'react-loader-spinner';
import { ListItem } from 'components/ListItem/ListItem';
import { selectVisibleContacts } from 'redux/filter/filterSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperators';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <div>
      {isLoading && (
        <>
          <p>Loading contacts</p>
          <ThreeDots
            height="20"
            width="30"
            radius="9"
            color="rgb(69, 201, 219)"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ justifyContent: 'center' }}
            wrapperClassName=""
            visible={true}
          />{' '}
        </>
      )}
      {error && <p>{error}</p>}
      {contacts.length > 0 && (
        <Wrapper>
          <List>
            {visibleContacts.map(item => (
              <ListItem key={item.id} {...item} />
            ))}
          </List>
        </Wrapper>
      )}
    </div>
  );
};
export default ContactList;

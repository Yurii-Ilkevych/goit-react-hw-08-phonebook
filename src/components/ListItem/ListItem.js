import { DeleteBtn } from 'components/DeleteBtn/DeleteBtn';
import { deleteContact } from 'redux/contacts/contactsOperators';
import { Item, WrapperItem } from './ListItem.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import React from 'react';
import { string } from 'prop-types';

const ListItem = ({ id, name, number }) => {
  const [isLoading, setIsLoading] = useState({ [id]: false });
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    setIsLoading(prevState => ({
      ...prevState,
      [id]: true,
    }));

    dispatch(deleteContact(id))
      .then(() => {
        setIsLoading(prevState => ({
          ...prevState,
          [id]: false,
        }));
      })
      .catch(() => {
        setIsLoading(prevState => ({
          ...prevState,
          [id]: false,
        }));
      });
  };
  return (
    <WrapperItem>
      <Item>
        {name}: {number}
      </Item>
      <DeleteBtn
        id={id}
        isLoading={isLoading[id]}
        onDelete={handleDeleteContact}
      />
    </WrapperItem>
  );
};

export { ListItem };

ListItem.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  number: string.isRequired,
};

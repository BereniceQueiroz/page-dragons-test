import React from 'react';
import Header from '~/components/Header';
import { Wrapper, List } from './styles';
//  import { useAuth } from '~/hooks/useAuth';

function EditItem() {
  // const { data, deleteItem } = useAuth();

  return (
    <Wrapper>
      <Header />
      <List>
        <h1>Editar</h1>
      </List>
    </Wrapper>
  );
}

export default EditItem;

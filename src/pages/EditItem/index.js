import React, { useState } from 'react';
import moment from 'moment';
import Button from '~/components/Button';
import Header from '~/components/Header';
import NewItemModal from '~/components/NewItemModal';
import { Wrapper, List, Table } from './styles';
import { components } from '~/assets';
import { useAuth } from '~/hooks/useAuth';

function Dashboard() {
  const { data, deleteItem } = useAuth();
  const [isNewItemModalOpen, setIsNewItemModalOpen] = useState(false);

  if (data.length > 0) {
    data.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  function handleOpenNewItemModal() {
    setIsNewItemModalOpen(true);
  }

  function handleCloseNewItemModal() {
    setIsNewItemModalOpen(false);
  }

  async function handleDeleteItem(id) {
    await deleteItem({ id });
  }

  console.log(data);
  return (
    <Wrapper>
      <Header />
      <List>
        <h1>Detalhes</h1>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Historia</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {data.map(d => {
              return (
                <tr key={d.id}>
                  <td>{d.name}</td>
                  <td>{d.type}</td>
                  <td>{d.histories}</td>
                  <td>{moment(d.createdAt).format('L')}</td>
                  <div>
                    <components.Edit />
                    <components.Exit onClick={() => handleDeleteItem(d.id)} />
                  </div>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button onClick={handleOpenNewItemModal}>Adicionar Novo</Button>
      </List>
      <NewItemModal
        isOpen={isNewItemModalOpen}
        onRequestClose={handleCloseNewItemModal}
      />
    </Wrapper>
  );
}

export default Dashboard;

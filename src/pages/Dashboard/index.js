import React, { useState } from 'react';
import { api } from '~/services/api';
import Button from '~/components/Button';
import Header from '~/components/Header';
import NewItemModal from '~/components/NewItemModal';
import { Wrapper, List, Table } from './styles';
import { components } from '~/assets';
import { useAuth } from '~/hooks/useAuth';

function Dashboard() {
  const { data } = useAuth();
  const [isNewItemModalOpen, setIsNewItemModalOpen] = useState(false);

  function handleOpenNewItemModal() {
    setIsNewItemModalOpen(true);
  }

  function handleCloseNewItemModal() {
    setIsNewItemModalOpen(false);
  }

  // function handleRemoveDragon(id) {
  //   api.delete(`/api/v1/dragon/${id}`).then(res => {
  //     console.log(res);
  //   });
  // }

  return (
    <Wrapper>
      <Header />
      <List>
        <h1>Lista de dragões</h1>
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
                  <td>
                    {/* {new Intl.DateTimeFormat('pt-BR').format(
                      new Date(d.createdAt),
                    )} */}
                  </td>
                  <div>
                    <components.Edit />
                    <components.Exit />
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

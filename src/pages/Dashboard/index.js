import React, { useState } from 'react';
import moment from 'moment';
import Button from '~/components/Button';
import Header from '~/components/Header';
import EditItemModal from '~/components/EditItemModal';
import NewItemModal from '~/components/NewItemModal';
import { Wrapper, List, Table } from './styles';
import { components } from '~/assets';
import { useAuth } from '~/hooks/useAuth';

function Dashboard() {
  const { list, deleteItem, updateItem } = useAuth();
  const [isNewItemModalOpen, setIsNewItemModalOpen] = useState(false);
  const [isEditModal, setIsEditModalOpen] = useState(false);
  const [idEdit, setIdEdit] = useState('');

  if (list.length >= 1) {
    list.sort(function (a, b) {
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

  function handleOpenEditModal(id) {
    setIsEditModalOpen(true);
    setIdEdit(id);
  }

  function handleCloseEditModal() {
    setIsEditModalOpen(false);
  }

  async function handleDeleteItem(id) {
    await deleteItem({ id });
  }

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
            {list.length > 0 &&
              list.map(d => {
                return (
                  <tr key={d.id}>
                    <td>{d.name}</td>
                    <td>{d.type}</td>
                    <td>{d.histories}</td>
                    <td>{moment(d.createdAt).format('L')}</td>
                    <div>
                      <components.Edit
                        onClick={() => handleOpenEditModal(d.id)}
                      />
                      <components.Exit onClick={handleDeleteItem} />
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
      <EditItemModal
        isOpen={isEditModal}
        onRequestClose={handleCloseEditModal}
        id={idEdit}
      />
    </Wrapper>
  );
}

export default Dashboard;

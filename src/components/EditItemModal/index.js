/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import Modal from 'react-modal';
import Button from '~/components/Button';
import Input from '~/components/Input';
import { useAuth } from '~/hooks/useAuth';
import { components } from 'assets';
import { Wrapper, ButtonClosed, Title } from './styles';

Modal.setAppElement('#root');

function EditItemModal({ isOpen, handleEditItem, onRequestClose, id }) {
  const { updateItem } = useAuth();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [histories, setHistories] = useState('');

  async function handleEditItem(e) {
    e.preventDefault();
    await updateItem({
      id,
      name,
      type,
      histories,
    });

    setName('');
    setType('');
    setHistories('');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Wrapper onSubmit={handleEditItem}>
        <ButtonClosed type="button" onClick={onRequestClose}>
          <components.Close />
        </ButtonClosed>
        <Title>Editar Item</Title>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="História"
          value={histories}
          onChange={e => setHistories(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Tipo"
          value={type}
          onChange={e => setType(e.target.value)}
        />
        <Button type="submit">Salvar</Button>
      </Wrapper>
    </Modal>
  );
}

export default EditItemModal;

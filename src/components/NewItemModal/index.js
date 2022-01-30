/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import Modal from 'react-modal';
import { api } from '~/services/api';
import axios from 'axios';
import Button from '~/components/Button';
import Input from '~/components/Input';
import { useAuth } from '~/hooks/useAuth';
import { components } from 'assets';
import { Wrapper, ButtonClosed, Title } from './styles';

Modal.setAppElement('#root');

function NewItemModal({ isOpen, onRequestClose }) {
  const { createItem } = useAuth();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [histories, setHistories] = useState('');

  // async function handleCreateNewItem() {
  //   e.preventDefault();

  //   console.log('aqui');

  //   await createItem({
  //     name,
  //     type,
  //     histories,
  //   });

  //   console.log('aqui');

  //   setName('');
  //   setType('');
  //   setHistories('');
  // // }

  async function handleCreateNewItem(e) {
    e.preventDefault();
    await createItem({
      name,
      type,
      histories,
    });
    // axios
    //   .post('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', {
    //     formData,
    //   })
    //   .then(res => console.log(res.data));
    // console.log('aaa', res);
    // setData(...data, res);

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
      <Wrapper onSubmit={handleCreateNewItem}>
        <ButtonClosed type="button" onClick={onRequestClose}>
          <components.Close />
        </ButtonClosed>
        <Title>Cadastrar Item</Title>
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
        <Button type="submit">Cadastrar</Button>
      </Wrapper>
    </Modal>
  );
}

export default NewItemModal;
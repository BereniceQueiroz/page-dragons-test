import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { api } from '~/services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get('/api/v1/dragon').then(response => setList(response.data));
  }, []);

  if (!list) {
    return null;
  }

  async function createItem({ name, type, histories }) {
    const data = {
      name,
      type,
      histories,
      createdAt: new Date(),
    };
    api
      .post('/api/v1/dragon', data)
      .then(response => {
        setList([...list, response.data]);
        toast.success('Item criado.');
      })
      .catch(err => {
        console.log(err);
        toast.error('Falha no cadastro', {
          position: 'top-right',
          autoClose: 5000,
        });
      });
  }

  async function deleteItem({ id }) {
    api
      .post(`/api/v1/dragon/${id}`)
      .then(response => {
        setData(response.data);
        toast.success('Item excluído.');
        console.log('aqui');
      })
      .catch(err => {
        console.log(err);
        toast.error('Falha na exclusão', {
          position: 'top-right',
          autoClose: 5000,
        });
      });
  }

  async function updateItem({ id, name, type, histories }) {
    const data = {
      name,
      type,
      histories,
    };
    api
      .put(`/api/v1/dragon/${id}`, data)
      .then(response => {
        setList(response.data);
        toast.success('Item editado.');
        window.location.reload();
        console.log('aqui');
      })
      .catch(err => {
        console.log(err);
        toast.error('Falha na edição', {
          position: 'top-right',
          autoClose: 5000,
        });
      });
  }

  async function createUser({ name, email, password }) {
    const formData = {
      name,
      email,
      password,
    };
    axios
      .post('http://localhost:5000/users', {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      .then(res => setUser(res.data.body));
    localStorage.setItem('@Dragon:isLogged', true);
  }

  return (
    <AuthContext.Provider
      value={{ list, createItem, deleteItem, updateItem, createUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

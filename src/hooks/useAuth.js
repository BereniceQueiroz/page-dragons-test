import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '~/services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/api/v1/dragon').then(response => setData(response.data));
  }, []);

  if (!data) {
    return null;
  }

  data.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  async function createItem({ name, type, histories }) {
    const data = {
      name,
      type,
      histories,
      createdAt: new Date(),
    };
    api.post('/api/v1/dragon', data).then(response => setData(response.data));
  }
  // .then(res => setData(...data, res.data.body));
  // }

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

  console.log(data);
  return (
    <AuthContext.Provider value={{ data, createItem, createUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

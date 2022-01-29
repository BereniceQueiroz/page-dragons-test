import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState([]);

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

  console.log(user);
  return (
    <AuthContext.Provider value={{ createUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

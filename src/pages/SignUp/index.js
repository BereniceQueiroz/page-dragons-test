import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Loader from '~/components/Loader';
import { images } from '~/assets';
import history from '~/services/history';
import { useAuth } from 'hooks/useAuth';

function SignUp() {
  const { createUser } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit() {
    setIsLoading(true);
    await createUser({
      name,
      email,
      password,
    });
    setName('');
    setEmail('');
    setPassword('');
    setIsLoading(false);

    history.push('/dashboard');
  }
  return (
    <>
      <img src={images.logo} alt="Imagem dragão vermelho" />
      <h1>Faça seu cadastro para ter acesso.</h1>

      <form onSubmit={handleSubmit}>
        <Input
          type="name"
          label="Nome"
          placeholder="Informe seu nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          type="email"
          label="Usuário"
          placeholder="Informe seu usuário"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          icon
          label="Senha"
          placeholder="******"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit" defaultButton>
          {isLoading ? <Loader /> : 'Cadastrar conta'}
        </Button>
      </form>
    </>
  );
}
export default SignUp;

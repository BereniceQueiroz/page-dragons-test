import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '~/components/Input';
import Button from '~/components/Button';
import { images } from '~/assets';

function SignIn() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  return (
    <>
      <img src={images.logo} alt="Imagem dragão vermelho" />
      <h1>Faça seu login para ter acesso.</h1>

      <form>
        <Input
          type="text"
          label="Usuário"
          placeholder="Informe seu usuário"
          maxLength={6}
          value={user}
          onChange={e => setUser(e.target.value)}
          // error={'Informe o usuário'}
        />
        <Input
          icon
          label="Senha"
          placeholder="******"
          maxLength={6}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit" defaultButton disabled>
          Acessar
        </Button>
        <Link to="cadastro">Criar conta</Link>
      </form>
    </>
  );
}
export default SignIn;

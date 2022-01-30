import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { images } from '~/assets';
// import { GlobalContext } from '~/contexts/GlobalState';
import { Wrapper, HeaderLinks } from './styles';
import themes from '~/styles/theme';

const Header = () => {
  // const { user } = useContext(GlobalContext);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('@Dragon:isLogged');
    history.push('/');
  };

  return (
    <Wrapper>
      <img
        onClick={() => history.push('/dashboard')}
        src={images.logo}
        alt="Logo da empresa"
      />
      <HeaderLinks>
        <button className="button" onClick={handleLogout}>
          Sair
        </button>
      </HeaderLinks>
    </Wrapper>
  );
};

export default Header;

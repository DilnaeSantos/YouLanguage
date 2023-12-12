import React from 'react';
import { Stylebody } from './styles';
import imgLogo from '../../../../../assets/logo2.jpg';
import { Link } from 'react-router-dom';

const Body: React.FC = () => {
  return (
    <Stylebody>
      <section className="containerForm">
        <form action="" className="form">
        <img src={imgLogo} alt="imagem da logo You Languages" />
          <input type="text" placeholder="Nome" autoComplete="name" required />
          <input type="text" placeholder="Sobrenome" required />
          <input type="email" placeholder="Email" autoComplete="email" required />
          <input type="number" placeholder="99 99999-9999" autoComplete='tel' required />
          <input type="password" placeholder="Senha" required />
          <Link to={'/VideoCall'}> <button>cadastrar</button> </Link> 
        </form>
      </section>
    </Stylebody>
  );
};

export default Body;

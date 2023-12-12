import React from 'react';
import { Stylebody } from './styles';
import imgLogo from '../../../../assets/logo2.jpg';
import { Link } from 'react-router-dom';

const Body: React.FC = () => {
  return (
    <Stylebody>
      <section className="containerForm">
        <form action="" className="form">
          <img src={imgLogo} alt="imagem da logo You Languages" />
          <input type="email" placeholder="Email" autoComplete="email" required />
          <input type="password" placeholder="Senha" required />
          <div className="containerSenha">
            <p>Esqueceu sua senha?</p> <Link to="/">Recuperar senha</Link>
          </div>
          <div className="containerCadastrar">
            <p>Não tem uma conta?</p> <Link to="/">Cadastre-se</Link>
          </div>
          <button>Entrar</button>
        </form>
      </section>
    </Stylebody>
  );
};

export default Body;

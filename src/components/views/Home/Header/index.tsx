import React from "react";
import { StyleHeader } from "./styles";
import { Link, useNavigate } from 'react-router-dom';
import imgLogo from '../../../../assets/logo2.jpg';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleAluno = () => {
    navigate('/Cadastro');
  };

  const handleProfessor = () => {
    navigate('/Cadastro!');
  };

  return (
    <StyleHeader>
      <img className="logo" src={imgLogo} alt="" />
      <nav className="navegacao">
        <button onClick={handleAluno} className="btnAluno">Seja Um Aluno</button>
        <button onClick={handleProfessor} className="btnProf">Seja Um Professor</button>
        <Link to='/login' className="login">Login</Link>
      </nav>
    </StyleHeader>
  );
};

export default Header;

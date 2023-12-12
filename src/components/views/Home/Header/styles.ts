import styled from "styled-components";

export const StyleHeader = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;

  .logo {
    margin: 1%;
    width: 15%;
    border-radius: 20px;
    transition: 0.2s;
  }

  .logo:hover {
    scale: 1.1;
  }

  .navegacao {
    margin: 0% 4% 0% 40%;
    width: 150%;
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .btnAluno {
    font-size: 120%;
    padding: 3%;
    margin-left: 2%;
    border-radius: 0% 30%;
    border: none;
    background-color: #771216;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
  }

  .btnProf {
    font-size: 120%;
    padding: 3%;
    margin: 0% 5%;
    border-radius: 0% 30%;
    border: none;
    background-color: #771216;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
  }

  .login {
    color: #ffffff;
    font-size: 160%;
    background-color: #fc1708;
    border-radius: 0% 30%;
    padding: 2%;
    transition: 0.2s;
  }

  .login:hover {
    scale: 1.3;
    border-radius: 30% 0%;
  }

  .btnAluno:hover, .btnProf:hover {
    scale: 1.1;
    border-radius: 30% 0%;
  }
`
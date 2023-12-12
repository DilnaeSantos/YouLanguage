import styled from "styled-components";

export const Stylebody = styled.body`

    img {
        width: 30%;
        margin-top: 3%;
        border-radius: 15px;
        transition: 0.2s;
    }

    .form {
        width: 50%;
        height: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #fc1708;
        border-radius: 4px;
        position: absolute;
        margin: 10% 25%;
        box-shadow: black 0px 3px 30px;
        transition: 0.3s;
    }

    input {
        width: 70%;
        font-size: 180%;
        padding: 1%;
        margin: 3% 0% 0% 0%;
        border-radius: 5px;
        border: none;
    }

    button {
        font-size: 200%;
        padding: 1%;
        border-radius: 0% 30%;
        margin: 3% 0% 2% 0%;
        border: none;
        background-color: #771216;
        color: #fff;
        transition: 0.2s;
    }

    button:hover {
        scale: 1.2;
        border-radius: 30% 0%;
    }

    img:hover, .form:hover {
        scale: 1.1;
    }

    .containerSenha {
        width: 50%;
        display: flex;
        color: #fff;
        font-size: 120%;
        margin: 2% 0% 2% 0%;
    }

    .containerCadastrar {
        width: 40%;
        display: flex;
        color: #fff;
        font-size: 120%;
        margin: 0% 0% 2% 0%;
    }

    a {
        margin-left: 3%;
        color: #000000;
        transition: 0.2s;
    }

    a:hover {
        scale: 1.1;
    }

`
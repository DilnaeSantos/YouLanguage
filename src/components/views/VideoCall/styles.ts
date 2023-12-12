import styled from 'styled-components'

export const Stylebody = styled.body`
    background-color: black;
    height: 100%;

    .btnCaderno {
        background-color: black;
        border: none;
        position: absolute;
        margin: 44% 0% 0% 0.3%;
    }

    .containerPrincipal {
        display: flex;
    }

    .containerShow {
        width: 50%;
        position: absolute;
    }

    .containerCall {
        width: 100%;
        margin: 0% 0% 0% 0%;
    }

    .containerCallAlteredStyle {
        width: 100%;
        margin: 0% 0% 0% 50%;
    } 

    .contentBtn {
        width: 98%;
        height: 99%;
    }

    .btnConteudo {
        width: 70%;
        font-size: 80%;
        padding: 5% 0%;
        margin: 1%;
        background-color: #ff8040;
        border: none;
    }

    .divBtnConteudos {
        margin: 2% 4% 0% 2%;
        display: flex;
    }

    .btnConteudoConversation {
        width: 98%;
        font-size: 120%;
        padding: 4% 0%;
        margin: 1%;
    }

    .btnFecharModulos {
        position: absolute;
        margin: 90% 0% 1% 80%;
        width: 15%;
        border-radius: 0% 30%;
        border: none;
        background-color: #771216;
        color: #fff;
        padding: 0.7%;
        transition: 0.2s;
        cursor: pointer;
    }

    .btnFecharModulos:hover {
        scale: 1.1;
        border-radius: 30% 0%;
    }

`
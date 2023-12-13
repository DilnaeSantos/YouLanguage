import styled from 'styled-components'

export const Stylebody = styled.body`
    background-color: #F6961D;
    max-height: 0px;
    min-height: 610px;
    overflow-y: scroll;    

    .aula {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .conteudo {
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 610px;
    }

    .imgBtn1 {
        width: 29%;
        height: 10%;
        margin: 0% 4% 0% 0%;
        border-radius: 0% 30%;
    }

    .imgBtn2 {
        width: 30%;
        height: 10%;
        margin: 0% 4% 0% 0%;
        border-radius: 0% 30%;
    }

    .btnFechar {
        width: 10%;
        margin: 90% 83% 0% 0%;
        position: absolute;
        font-size: 103%;
        border-radius: 0% 30%;
        border: none;
        background-color: #771216;
        color: #fff;
        padding: 0.5%;
        transition: 0.2s;
        cursor: pointer;
    }

    .btnFechar2 {
        width: 10%;
        margin: 90% 0% 0% 1%;
        position: absolute;
        font-size: 103%;
        border-radius: 0% 30%;
        border: none;
        background-color: #771216;
        color: #fff;
        padding: 0.5%;
        transition: 0.2s;
        cursor: pointer;
    }

    .btnFechar2:hover, .btnFechar:hover {
        scale: 1.1;
        border-radius: 30% 0%;
    }

    button {
        font-size: 120%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 4%;
        margin-bottom: 4%;
        width: 50%;
        font-style: italic;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

`
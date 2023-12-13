import styled from 'styled-components'

export const Stylebody = styled.body`
    color: #990000;

    .containerExercises {
        display: flex;
        flex-direction: column;
        margin: 3% 7%;
        font-size: 130%;
    }

    .logo {
        margin: 0.5%;
        width: 25%;
        border-radius: 5px;
    }

    h1 {
        margin: 0% 0% 0% 10%;
    }

    h5 {
        margin: 0% 0% 3% 0%;
    }

    h6 {
        margin: 0% 0% 5% 10%;
    }

    ul {
        list-style: none;
        margin: 2% 0% 5% 0%;
    }

    li {
        margin-bottom: 1%;
    }

    .input {
        width: 7%;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #990000;
        font-size: 100%;
        color: #990000;
    }

    input:focus {
        outline: none;
    }

    strong, h1 {
        color: #000;
    }

`
import styled from 'styled-components'

export const Stylebody = styled.body`

    .containerConversation {
        display: flex;
        flex-direction: column;
        color: #990000;
        font-size: 130%;
    }

    .logo {
        margin: 0.5%;
        width: 25%;
        border-radius: 5px;
    }

    .ulPar {
        margin-left: 40%;
        color: #590000;
    }

    h1 {
        margin-left: 8%;
    }

    ul {
        margin: 3% 13%;
        list-style: none;
    }

    ul li::before {
        content: "-";
        margin-right: 5px;
    }

`
import styled from 'styled-components'

export const notebookStyles = styled.div`
    .notebook {
        perspective: 1000px;
        position: relative;
        height: 400px; /* Altura das páginas do caderno */
        margin: 20px auto;
        /* Outros estilos */
    }

    .page {
        position: absolute;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: transform 0.5s ease-in-out;
        /* Outros estilos */
    }

    .page.active {
        /* Estilos para a página ativa */
        /* ... */
    }
`

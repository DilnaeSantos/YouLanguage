import React, { useState } from 'react';
import { Stylebody } from "./styles";
import { notebookStyles } from './notebook';
import imgQuarto from '../../../../../../assets/imgs/A1FIG1.jpg'
import logo from '../../../../../../assets/logo2.jpg'

const Vocabulary: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0); // Estado para controlar a página atual

  const nextPage = () => {
      setCurrentPage((prevPage: number) => prevPage + 1);
  };

  const prevPage = () => {
      setCurrentPage((prevPage: number) => prevPage - 1);
  };

  const pages = [
      // Array com o conteúdo de cada página do caderno
      <div key={1} className={`page ${currentPage === 0 ? 'active' : ''}`}>
          <section className="Capa">
            <div>
              <img className="logo" src={logo} alt="logo" />
            </div>
             <img className="imgQuarto" src={imgQuarto} alt="Um quarto completo visto da porta de entrada do quarto" />
          </section>
      </div>,
      <div key={2} className={`page ${notebookStyles} ${currentPage === 1 ? 'active' : ''}`}>
          <div className="ul1">
            <h4 className="tituloUl1">Nouns Prepositions</h4>
            <ul>
              <li>Home</li>
              <li>A student</li>
              <li>A doctor</li>
              <li>A teacher</li>
              <li>To the</li>
              <li>To the post office</li>
              <li>University</li>
              <li>Movie theater</li>
              <li>College</li>
              <li>To</li>
              <li>To School</li>
              <li>In the</li>
              <li>In the morning</li>
              <li>In the afternoon</li>
              <li>In the evening</li>
              <li>At night</li>
            </ul>
          </div>
      </div>,
      <div key={3} className={`page ${currentPage === 1 ? 'active' : ''}`}>
      {/* Conteúdo da segunda página */}
      {/* ... (Seu conteúdo aqui) ... */}
      </div>,
  ];
    
    return (
        <>
          <Stylebody>
          <div className={`notebook ${notebookStyles}`}>
                    <div className="page-container">
                        <button onClick={prevPage} disabled={currentPage === 0}>
                            Previous
                        </button>
                        {pages.map((page, index) => (
                            // Renderiza apenas a página atual
                            index === currentPage && <div key={index}>{page}</div>
                        ))}
                        <button onClick={nextPage} disabled={currentPage === pages.length - 1}>
                            Next
                        </button>
                    </div>
                </div>
          </Stylebody>
        </>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default Vocabulary;
//import react from 'react';
import { Stylebody } from "./styles";
import imgQuarto from '../../../../../../assets/imgs/A1FIG1.jpg'
import logo from '../../../../../../assets/logo2.jpg'

const Vocabulary: React.FC = () => {
    
    return (
        <>
          <Stylebody>
            <div>
                <section className="Capa">
                  <div>
                    <img className="logo" src={logo} alt="logo" />
                  </div>
                   <img className="imgQuarto" src={imgQuarto} alt="Um quarto completo visto da porta de entrada do quarto" />
                </section>
                <section className="conteudos">
                    <h1 className="titulosKEY">Keywords</h1>
                    <h6>(listen & repeat)</h6>
                    <h3 className="titulosBed">What's Your Name?</h3>
                    <div className="uls">
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
                      <div className="ul2">
                        <h4>Verbs</h4>
                        <ul>
                          <li>Go</li>
                          <li>Drive</li>
                          <li>Live</li>
                          <li>Do</li>
                          <li>Be</li>
                          <li>I am</li>
                          <li>You are</li>
                          <li>She is</li>
                          <li>He is</li>
                          <li>It is</li>
                          <li>We are</li>
                          <li>They are</li>
                        </ul>
                      </div>
                    </div>
                    <div className="divAdj">
                      <h4>Useful Phrases</h4>
                      <ul>
                        <li>Also</li>
                        <li>Thanks</li>
                        <li>What's going on?</li>
                        <li>Where are you going?</li>
                        <li>Good morning</li>
                        <li>Good afternoon</li>
                        <li>Good evening</li>
                        <li>Hello</li>
                        <li>Now</li>
                        <li>How are you doing?</li>
                        <li>I'm good</li>
                        <li>What's going on?</li>
                        <li>Nothing much</li>
                        <li>It's cool</li>
                        <li>This</li>
                        <li>That</li>
                      </ul>
                    </div>
                </section>
            </div>
          </Stylebody>
        </>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default Vocabulary;
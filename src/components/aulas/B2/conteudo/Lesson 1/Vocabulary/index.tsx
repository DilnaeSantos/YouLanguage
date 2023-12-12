//import react from 'react';
import { Stylebody } from "./styles";
import imgQuarto from '../../../../../../assets/imgs/imgquarto.jpg'
import logo from '../../../../../../assets/logo2.jpg'

const Vocabulary: React.FC = () => {
    
    return (
        <>
          <Stylebody>
            <div>
                <section className="Capa">
                  <img className="logo" src={logo} alt="logo" />
                  <h3 className="titulos">ENGLISH</h3>
                  <h1 className="titulos">LESSON 1</h1>
                  <h2 className="titulos">A1 LEVEL</h2>
                </section>
                <section>
                    <img className="imgQuarto" src={imgQuarto} alt="Um quarto completo visto da porta de entrada do quarto" />
                    <h2>VOCABULARY</h2>
                    <div>
                      <h4>MY BEDROOM</h4>
                      <ul>
                        <li>Bed</li>
                        <li>Pillow</li>
                        <li>Blanket</li>
                        <li>Wardrobe</li>
                        <li>Dresser</li>
                        <li>Nightstand</li>
                        <li>Lamp</li>
                        <li>Mirror</li>
                        <li>Alarm Clock</li>
                        <li>Window</li>
                      </ul>
                    </div>
                    <div>
                      <h4>VERBS</h4>
                      <ul>
                         <li>Sleep</li>
                         <li>Wake up</li>
                         <li>Make the bed</li>
                         <li>Relax</li>
                         <li>Read</li>
                         <li>Tidy up</li>
                         <li>Change</li>
                         <li>Dream</li>
                         <li>Stretch</li>
                         <li>Snuggle</li> 
                      </ul>
                    </div>
                    <div>
                      <h4>ADJECTIVES</h4>
                      <ul>
                        <li>Cozy</li>
                        <li>Comfortable</li>
                        <li>Relaxing</li>
                        <li>Quiet</li>
                        <li>Messy</li>
                        <li>Serene</li>
                        <li>Inviting</li>
                        <li>Warm</li>
                        <li>Organized</li>
                        <li>Dim</li>
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
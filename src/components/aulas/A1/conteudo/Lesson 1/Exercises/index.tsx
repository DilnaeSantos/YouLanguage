//import react from 'react';
import { Stylebody } from "./styles";
import logo from '../../../../../../assets/logo2.jpg'

const Exercises: React.FC = () => {
    
    return (
        <>
          <Stylebody>
            <div>
              <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="containerExercises">
              <h1>Exercises</h1>
              <h6>(drill)</h6>
              <div>
                <p><strong>1. Complete the sentences with the correct form of "be" (am, is, are):</strong></p>
                <ul>
                  <li>I <input className="input" type="text" /> a teacher.</li>
                  <li>They <input className="input" type="text" /> our neighbors.</li>
                  <li>She <input className="input" type="text" /> my best friend.</li>
                </ul>
              </div>
              <div>
                <p><strong>2. Make the following sentences negative:</strong></p>
                <ul>
                  <li>I <input className="input" type="text" /> happy.</li>
                  <li>We <input className="input" type="text" /> at the office.</li>
                  <li>It <input className="input" type="text" /> a difficult task.</li>
                </ul>
              </div>
              <div>
                <p><strong>3. Create interrogative sentences:</strong></p>
                <ul>
                  <li><input className="input" type="text" /> she your sister?</li>
                  <li><input className="input" type="text" /> we late?</li>
                  <li><input className="input" type="text" /> they in the park?</li>
                </ul>
              </div>
              <div>
                <p><strong>4. Replace the underlined words with the correct subject pronoun:</strong></p>
                <ul>
                  <li>This book is interesting. <input className="input" type="text" /> is interesting.</li>
                  <li>That car is fast. I like <input className="input" type="text" />.</li>
                  <li>These flowers are beautiful. I picked <input className="input" type="text" /> for you.</li>
                </ul>
              </div>
              <div>
                <p><strong>5. Use demonstrative pronouns "this" or "that" to complete the
                sentences:</strong></p>
                <ul>
                  <li>I really like <input className="input" type="text" /> dress you're wearing.</li>
                  <li><input className="input" type="text" /> is my favorite song.</li>
                  <li>I don't want <input className="input" type="text" /> book; I want the one over there.</li>
                </ul>
              </div>
            </div>
          </Stylebody>
        </>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default Exercises;
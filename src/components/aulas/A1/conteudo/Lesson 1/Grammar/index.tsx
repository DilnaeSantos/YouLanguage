//import react from 'react';
import { Stylebody } from "./styles";
import logo from '../../../../../../assets/logo2.jpg'

const Grammar: React.FC = () => {
    
    return (
        <>
          <Stylebody>
            <div>
              <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="containerGrammar"> 
                <h1>Grammar</h1>
                <h6>(studyl)</h6>
                <p>
                  <strong>Subject pronouns:</strong> are used to replace or stand in for the subject of a
                  sentence. Here are the subject pronouns:
                </p>
                <ul className="ul">
                  <li>I</li>
                  <li>You</li>
                  <li>He</li>
                  <li>She</li>
                  <li>It</li>
                  <li>We</li>
                  <li>They</li>
                </ul>
                <p>
                  <strong>Demonstrative pronouns:</strong> indicate or point to specific nouns in a
                  sentence. In the singular form, they are:
                </p>
                <ul className="ul">
                  <li><strong>This</strong> (close to the speaker)</li>
                  <li>Example: This book is interesting.</li>
                  <li><strong>That</strong> (away from the speaker)</li>
                  <li>Example: That cat is cute.</li>
                </ul>
                <p>
                  Let's use the <strong>verb "be"</strong> in <strong>affirmative, interrogative,</strong> and <strong>negative</strong> sentences.
                </p>
                <div>
                  <h3><strong>Affirmative</strong></h3>
                  <ul className="ul2">
                    <li>I am a student</li>
                    <li>They are my friends.</li>
                    <li>She is happy.</li>
                  </ul>
                  <h3><strong>Negative</strong></h3>
                  <ul className="ul2">
                    <li>I am not tired.</li>
                    <li>They are not coming to the party.</li>
                    <li>He is not a doctor.</li>
                  </ul>
                  <h3><strong>Interrogative</strong></h3>
                  <ul className="ul2">
                    <li>Am I late?</li>
                    <li>Are they your classmates?</li>
                    <li>Is he your brother?</li>
                  </ul>
                </div>
            </div>
          </Stylebody>
        </>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default Grammar;
//import react from 'react';
import { Stylebody } from "./styles";
import logo from '../../../../../../assets/logo2.jpg'

const Pronunciation: React.FC = () => {
    
    return (
        <>
          <Stylebody>
            <div className="containerPronunciation">
                <div>
                  <img className="logo" src={logo} alt="logo" />
                </div>
                <h1>Pronunciation</h1>
                <h6>(repeat)</h6>
                <h4>Long Volwels:</h4>
                <ul>
                    <li>A /ei:/ (as in cake): "cake"</li>
                    <li>E /i:/ (as in see): "see"</li>
                    <li>I /ai:/ (as in kite): "kite"</li>
                    <li>O /o:/ (as in role): "role"</li>
                    <li>U /ju:/ (as in cute): "cute"</li>
                </ul>
                <h4>Short Volwels:</h4>
                <ul>
                  <li>A /æ/ (as in cat): “cat"</li>
                  <li>E /ɛ/ (as in bed): “bed"</li>
                  <li>I /i/ (as in sit): “sit"</li>
                  <li>O /ɒ/ (as in log): “log"</li>
                  <li>U /ʌ/ (as in sun): “sun"</li>
                </ul>
                <p className="note"><strong>Note:</strong> The key difference lies in the duration of the vowel sound. Short
                  vowels are quick, while long vowels are held for a slightly longer
                  duration. Practice can help in distinguishing between them.
                </p>
            </div>
          </Stylebody>
        </>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default Pronunciation;
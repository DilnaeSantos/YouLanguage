//import react from 'react';
import { Stylebody } from "./styles";
import logo from '../../../../../../assets/logo2.jpg'

const Conversation: React.FC = () => {
    
    return (
        <>
          <Stylebody>
            <div className="containerConversation">
                <div>
                  <img className="logo" src={logo} alt="logo" />
                </div>
                <h1>Good Morning (greetings)</h1>
                <h6>(role play)</h6>
                <ul>
                  <li>Good morning. My name is John.</li>
                  <li>This is Peter. He is a student.</li>
                </ul>
                <ul className="ulPar">
                  <li>Is Peter a student? Yes, he is.</li>
                  <li>Is Peter a teacher? No, he isn't.</li>
                </ul>
                <ul>
                  <li>My name is Lisa. I am a doctor.</li>
                  <li>Is Lisa a student? No, she isn't.</li>
                  <li>Is Lisa a doctor? Yes, she is.</li>
                </ul>
                <ul className="ulPar">
                  <li>Hello, John</li>
                  <li>Hi, Peter. How are you doing?</li>
                  <li>Good. Thanks for asking.</li>
                </ul>
                <ul>
                  <li>Hi there, Lisa. How's it going?</li>
                  <li>Good. Thank you.</li>
                  <li>How is John?</li>
                  <li>He's good.</li>
                  <li>And how about Jenny?</li>
                  <li>She's also good.</li>
                </ul>
                <ul className="ulPar">
                  <li>Hey Ken, where are you going?</li>
                  <li>I'm going to school.</li>
                  <li>And you Jenny. Where are you going?</li>
                  <li>I'm going home.</li>
                </ul>
                <ul>
                  <li>Where is Paul going?</li>
                  <li>He's going to Rachel's house.</li>
                  <li>Where is Shirley going?</li>
                  <li>She's going to the movie theater.</li>
                  <li>And where is Jenny going?</li>
                  <li>She's going to the post office.</li>
                </ul>
                <ul className="ulPar">
                  <li>Where are you going?</li>
                  <li>We're going to work.</li>
                  <li>Where are Peter and Joe going?</li>
                  <li>They're going to the shopping mall.</li>
                  <li>What are you doing now?</li>
                  <li>I'm going home.</li>
                </ul>
                <ul>
                  <li>What is Peter doing?</li>
                  <li>He's gonna visit James</li>
                  <li>What are you doing now?</li>
                  <li>I'm driving.</li>
                  <li>What is Lisa doing?</li>
                  <li>She's walking.</li>
                  <li>What are Jeff and Ken doing?</li>
                  <li>They're going to the office.</li>
                </ul>
                <ul className="ulPar">
                  <li>Where do you live?</li>
                  <li>I live on Love Street, 205.</li>
                  <li>Where does Lisa live?</li>
                  <li>She lives on Hater Street, 207. She is my neighbor.</li>
                </ul>
            </div>
          </Stylebody>
        </>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default Conversation;
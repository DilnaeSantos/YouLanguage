//import react from 'react';
import { Stylebody } from "./styles";
import logo from '../../../../../../assets/logo2.jpg'

const Pronunciation: React.FC = () => {
    
    return (
        <>
          <Stylebody>
              <img className="logo" src={logo} alt="logo" />
              <p>Pronunciation</p>  
          </Stylebody>
        </>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default Pronunciation;
//import react from 'react';
import { Stylebody } from "./styles";
import video1 from '../../../../../../assets/video/Vídeo1 aula 2.mp4';
import logo from '../../../../../../assets/logo2.jpg'

const VideoLesson: React.FC = () => {
    
    return (
        <>
          <Stylebody>
            <div>
                <div>
                  <img className="logo" src={logo} alt="logo" />
                </div>
                <h1>Video Lesson</h1>
                <h6>(watch & answer)</h6>
                <video src={video1} controls></video>
                <div className="questions">
                  <h2>Answer These Questions:</h2>
                  <p>what's your name?</p>
                  <p>where are you from?</p>
                  <p>How many people are there in your family?</p>
                  <p>do you have a job?</p>
                  <p>what do you like to read?</p>
                  <p>How many languages can you speak?</p>
                  <p>what's you favorite TV show?</p>
                  <p>Wha time do you usually get up?</p>
                  <p>are you married or single?</p>
                  <p>do you have any pets?</p>
                  <p>what kind of movies do you like?</p>
                  <p>wha kind of food do you like?</p>
                  <p>do you live in a house or an apartment?</p>
                  <p>what are your hobbies?</p>
                  <p>what do you like to do on the weekends?</p>
                  <p>How do you get to class?</p>
                </div>
            </div>
          </Stylebody>
        </>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default VideoLesson;
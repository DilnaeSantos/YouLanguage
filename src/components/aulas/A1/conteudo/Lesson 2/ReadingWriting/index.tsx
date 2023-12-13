//import react from 'react';
import { Stylebody } from "./styles";
import Audio1 from '../../../../../../assets/audio/A1 Audio1.mp3';
import logo from '../../../../../../assets/logo2.jpg'

const ReadingWriting: React.FC = () => {
    
    return (
        <>
          <Stylebody>
            <div className="containerRW">
            <div>
                    <img className="logo" src={logo} alt="logo" />
                  </div>
                <h1>Reading & Writing</h1>
                <h6>(listen)</h6>
                <audio src={Audio1} controls></audio>
                <div>
                  <p>"Hello! Good morning, and thanks for reaching out. How are you doing today?" John greets.</p>
                  <p>"I’m good, thanks for asking. What's going on with you?" Lisa replies.</p>
                  <p> "Nothing much, just the usual routine. I'm heading to the post office. Where are you off to?" John inquirers.</p>
                  <p>"I’m on my way to college. I'm a student there. How about you?" Lisa responds.</p>
                  <p>"Now I'm working at the local college as a teacher. It's cool interacting with students from different backgrounds," John shares.</p>
                  <p>"That sounds interesting. By the way, do you want to check out the new movie theater in town?" Lisa suggests.</p>
                  <p>"Of course, maybe we can go there anytime. What do you think?" John proposes.</p>
                  <p>"That sounds like a plan. Now, let's focus on our current destinations. I need to get to the post office, and you're heading to college," Lisa agrees.</p>
                  <p> "Absolutely. Let's catch up later. Thanks for the chat, and have a great day!" John said.</p>
                  <p>"You too! See you later," Lisa replies as they both go on separate ways.</p>
                </div>
                <form action="">
                  <label htmlFor="">Activity: Write you own text based on text above.</label>
                  <textarea name="Activity" id="" cols={30} rows={15}></textarea>
                </form>
            </div>
          </Stylebody>
        </>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default ReadingWriting;
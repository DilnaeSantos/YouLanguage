import React, { useState } from 'react';
import { Stylebody } from './styles';
import img1 from '../../../assets/imgs/A1FIG1.jpg'
import img2 from '../../../assets/imgs/img2 aula2.png'

// conteudo da lesson 1 modulo A1, Aula Impar
import VocabularyImpar1 from './conteudo/Lesson 1/Vocabulary'
import PronunciationImpar1 from './conteudo/Lesson 1/Pronunciation'
import GrammarImpar1 from './conteudo/Lesson 1/Grammar'
import ExercisesImpar1 from './conteudo/Lesson 1/Exercises'

// conteudo da lesson 2 modulo A1, Aula Par
import ConversationPar2 from './conteudo/Lesson 2/Conversation';
import ReadingWritingPar2 from './conteudo/Lesson 2/ReadingWriting';
import VideoLessonPar2 from './conteudo/Lesson 2/VideoLesson'

// conteudo da lesson 3 modulo A1, Aula Impar
import VocabularyImpar3 from './conteudo/Lesson 3/Vocabulary';
import PronunciationImpar3 from './conteudo/Lesson 3/Pronunciation';
import GrammarImpar3 from './conteudo/Lesson 3/Grammar';
import ExercisesImpar3 from './conteudo/Lesson 3/Exercises';

// conteudo da lesson 4 modulo A1, Aula Par


const A1: React.FC = () => {
    const [showContent, setShowContent] = useState(true);
    
    // conteudo da lesson 1 modulo A1, Aula Impar
    const [ShowAulaImpar1, setShowAulaImpar1] = useState(false);
    const [showVocabularyImpar1, setShowVocabularyImpar1] = useState(false);
    const [showPronunciationImpar1, setShowPronunciationImpar1] = useState(false);
    const [showGrammarImpar1, setShowGrammarImpar1] = useState(false);
    const [showExercisesImpar1, setShowExercisesImpar1] = useState(false);

    // conteudo da lesson 2 modulo A1, Aula Par
    const [showAulaPar2, setshowAulaPar2] = useState(false);
    const [showConversationPar2, setShowConversationPar2] = useState(false);
    const [showReadingWritingPar2, setShowReadingWritingPar2] = useState(false);
    const [showVideoLessonPar2, setShowVideoLessonPar2] = useState(false);

    // conteudo da lesson 3 modulo A1, Aula Impar
    const [ShowAulaImpar3, setShowAulaImpar3] = useState(false);
    const [showVocabularyImpar3, setShowVocabularyImpar3] = useState(false);
    const [showPronunciationImpar3, setShowPronunciationImpar3] = useState(false);
    const [showGrammarImpar3, setShowGrammarImpar3] = useState(false);
    const [showExercisesImpar3, setShowExercisesImpar3] = useState(false);
    
    // conteudo da lesson 1 modulo A1, Aula Impar
    const opensetShowAulaImpar1 = () => {
        setShowAulaImpar1(true);
        setShowContent(false);
        setShowVocabularyImpar1(false);
        setShowPronunciationImpar1(false);
        setShowGrammarImpar1(false);
        setShowExercisesImpar1(false);
    };

    const closeSetShowAulaImpar1 = () => {
        setShowAulaImpar1(false);
        setShowContent(true);
    };

    const showVocabularyImpar1Handler = () => {
        setShowVocabularyImpar1(true);
        setShowAulaImpar1(false); 
    };

    const showPronunciationImpar1Handler = () => {
        setShowPronunciationImpar1(true);
        setShowAulaImpar1(false);
    }

    const showGrammarImpar1Handler = () => {
        setShowGrammarImpar1(true);
        setShowAulaImpar1(false);
    }

    const showExercisesImpar1Handler = () => {
        setShowExercisesImpar1(true);
        setShowAulaImpar1(false);
    }
    
    // conteudo da Lesson 2 modulo A1, Aula Par
    const opensetShowAulaPar2 = () => {
        setshowAulaPar2(true); 
        setShowContent(false);
        setShowConversationPar2(false);
        setShowReadingWritingPar2(false);
        setShowVideoLessonPar2(false);
    };

    const showConversationPar2Handler = () => {
        setShowConversationPar2(true);
        setshowAulaPar2(false);
    }

    const showReadingWritingPar2Handler = () => {
        setShowReadingWritingPar2(true);
        setshowAulaPar2(false);
    }

    const showVideoLessonPar2Handler = () => {
        setShowVideoLessonPar2(true);
        setshowAulaPar2(false);
    }

    const closeSetshowAulaPar2 = () => {
        setShowContent(true);
        setshowAulaPar2(false);
    }

    // conteudo da Lesson 3 modulo A1, Aula Impar
    const opensetShowAulaImpar3 = () => {
        setShowAulaImpar3(true);
        setShowContent(false);
        setShowVocabularyImpar3(false);
        setShowPronunciationImpar3(false);
        setShowGrammarImpar3(false);
        setShowExercisesImpar3(false);
    };
    
    const showVocabularyImpar3Handler = () => {
        setShowVocabularyImpar3(true);
        setShowAulaImpar3(false);
    }

    const showPronunciationImpar3Handler = () => {
        setShowPronunciationImpar3(true);
        setShowAulaImpar3(false);
    }

    const showGrammarImpar3Handler = () => {
        setShowGrammarImpar3(true);
        setShowAulaImpar3(false);
    }

    const showExercisesImpar3Handler = () => {
        setShowExercisesImpar3(true);
        setShowAulaImpar3(false);
    }

    const closeSetShowAulaImpar3 = () => {
        setShowContent(true);
        setShowAulaImpar3(false);
    }

    // voltar
    const voltarImpar = () => {
        setShowAulaImpar1(true);
        setShowVocabularyImpar1(false);
        setShowPronunciationImpar1(false);
        setShowGrammarImpar1(false);
        setShowExercisesImpar1(false);
    }
    
    const voltarPar = () => {
        setshowAulaPar2(true);
        setShowConversationPar2(false);
        setShowReadingWritingPar2(false);
        setShowVideoLessonPar2(false);
    }

    const voltarImpar3 = () => {
        setShowAulaImpar3(true);
        setShowVocabularyImpar3(false);
        setShowPronunciationImpar3(false);
        setShowGrammarImpar3(false);
        setShowExercisesImpar3(false);
    }

    return (
        <Stylebody>
            { showContent && (
                <div className="aula">
                    <button onClick={opensetShowAulaImpar1}><img className="imgBtn1" src={img1} alt="uma imagem de um quarto visto da porta de entrada do quarto" /> Lesson 1 - Hello! good morning</button>
                    <button onClick={opensetShowAulaPar2}><img className="imgBtn2" src={img2} alt="uma imagem de um quarto visto de frente da posição da TV" />Lesson 2 - Introducing yourself</button>
                    <button onClick={opensetShowAulaImpar3}>Bathroom</button>
                    <button>What are they doing?</button>
                    <button>Closet/wardrobe</button>
                    <button>Present simple</button>
                    <button>Breakfast</button>
                    <button>Food vocabulary</button>
                    <button>Transport</button>
                    <button>Pronunciation past tense</button>
                    <button>Work</button>
                    <button>Jobs and occupations</button>
                    <button>School</button>
                    <button>Irregular verbs</button>
                    <button>Travel</button>
                    <button>Assessment test</button>
                </div>
            )}
            { ShowAulaImpar1 && (
                 <div className='conteudo'>
                    <button onClick={showVocabularyImpar1Handler}>Vocabulary</button>
                    <button onClick={showPronunciationImpar1Handler}>Pronunciation</button>
                    <button onClick={showGrammarImpar1Handler}>Grammar</button>
                    <button onClick={showExercisesImpar1Handler}>Exercise</button>
                 <button className='btnFechar' onClick={closeSetShowAulaImpar1}>Voltar</button>
             </div>
            )}
            { showAulaPar2 && (
                <div className='conteudo'>
                    <button onClick={showConversationPar2Handler}>Conversation</button>
                    <button onClick={showReadingWritingPar2Handler}>Reading & writing</button>
                    <button onClick={showVideoLessonPar2Handler}>Video Lesson</button>
                    <button className='btnFechar' onClick={closeSetshowAulaPar2}>Voltar</button>
                </div>
            )}
            { ShowAulaImpar3 && (
                <div className='conteudo'>
                    <button onClick={showVocabularyImpar3Handler}>Vocabulary</button>
                    <button onClick={showPronunciationImpar3Handler}>Pronunciation</button>
                    <button onClick={showGrammarImpar3Handler}>Grammar</button>
                    <button onClick={showExercisesImpar3Handler}>Exercise</button>
                    <button className='btnFechar' onClick={closeSetShowAulaImpar3}>Voltar</button>
                </div>
            )}

            {/*  // conteudo da lesson 1 modulo A1, Aula Impar */}
            {showVocabularyImpar1 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar}>Voltar</button></div><VocabularyImpar1 /></>)}
            {showPronunciationImpar1 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar}>Voltar</button></div><PronunciationImpar1 /></>)}
            {showGrammarImpar1 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar}>Voltar</button></div><GrammarImpar1 /></>)}
            {showExercisesImpar1 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar}>Voltar</button></div><ExercisesImpar1 /></>)}

            {/*  // conteudo da lesson 2 modulo A1, Aula Par */}
            {showConversationPar2 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar}>Voltar</button></div><ConversationPar2 /></>)}
            {showReadingWritingPar2 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar}>Voltar</button></div><ReadingWritingPar2 /></>)}
            {showVideoLessonPar2 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar}>Voltar</button></div><VideoLessonPar2 /></>)}

            {/*  // conteudo da lesson 3 modulo A1, Aula Impar */}
            {showVocabularyImpar3 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar3}>Voltar</button></div><VocabularyImpar3 /></>)}
            {showPronunciationImpar3 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar3}>Voltar</button></div><PronunciationImpar3 /></>)}
            {showGrammarImpar3 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar3}>Voltar</button></div><GrammarImpar3 /></>)}
            {showExercisesImpar3 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar3}>Voltar</button></div><ExercisesImpar3 /></>)}
        </Stylebody>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default A1;
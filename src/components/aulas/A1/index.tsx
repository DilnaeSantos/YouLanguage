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
import ConversationPar4 from './conteudo/Lesson 4/Conversation';
import ReadingWritingPar4 from './conteudo/Lesson 4/ReadingWriting';
import VideoLessonPar4 from './conteudo/Lesson 4/VideoLesson';

// conteudo da lesson 5 modulo A1, Aula Impar
import VocabularyImpar5 from './conteudo/Lesson 5/Vocabulary';
import PronunciationImpar5 from './conteudo/Lesson 5/Pronunciation';
import GrammarImpar5 from './conteudo/Lesson 5/Grammar';
import ExercisesImpar5 from './conteudo/Lesson 5/Exercises';

// conteudo da lesson 6 modulo A1, Aula Par
import ConversationPar6 from './conteudo/Lesson 6/Conversation';
import ReadingWritingPar6 from './conteudo/Lesson 6/ReadingWriting';
import VideoLessonPar6 from './conteudo/Lesson 6/VideoLesson';

// conteudo da lesson 7 modulo A1, Aula Impar
import VocabularyImpar7 from './conteudo/Lesson 7/Vocabulary';
import PronunciationImpar7 from './conteudo/Lesson 7/Pronunciation';
import GrammarImpar7 from './conteudo/Lesson 7/Grammar';
import ExercisesImpar7 from './conteudo/Lesson 7/Exercises';

// conteudo da lesson 8 modulo A1, Aula Par
import ConversationPar8 from './conteudo/Lesson 8/Conversation';
import ReadingWritingPar8 from './conteudo/Lesson 8/ReadingWriting';
import VideoLessonPar8 from './conteudo/Lesson 8/VideoLesson';

// conteudo da lesson 9 modulo A1, Aula Impar
import VocabularyImpar9 from './conteudo/Lesson 9/Vocabulary';
import PronunciationImpar9 from './conteudo/Lesson 9/Pronunciation';
import GrammarImpar9 from './conteudo/Lesson 9/Grammar';
import ExercisesImpar9 from './conteudo/Lesson 9/Exercises';

// conteudo da lesson 10 modulo A1, Aula Par
import ConversationPar10 from './conteudo/Lesson 10/Conversation';
import ReadingWritingPar10 from './conteudo/Lesson 10/ReadingWriting';
import VideoLessonPar10 from './conteudo/Lesson 10/VideoLesson';

// conteudo da lesson 11 modulo A1, Aula Impar
import VocabularyImpar11 from './conteudo/Lesson 11/Vocabulary';
import PronunciationImpar11 from './conteudo/Lesson 11/Pronunciation';
import GrammarImpar11 from './conteudo/Lesson 11/Grammar';
import ExercisesImpar11 from './conteudo/Lesson 11/Exercises';

// conteudo da lesson 12 modulo A1, Aula Par
import ConversationPar12 from './conteudo/Lesson 12/Conversation';
import ReadingWritingPar12 from './conteudo/Lesson 12/ReadingWriting';
import VideoLessonPar12 from './conteudo/Lesson 12/VideoLesson';

// conteudo da lesson 13 modulo A1, Aula Impar
import VocabularyImpar13 from './conteudo/Lesson 13/Vocabulary';
import PronunciationImpar13 from './conteudo/Lesson 13/Pronunciation';
import GrammarImpar13 from './conteudo/Lesson 13/Grammar';
import ExercisesImpar13 from './conteudo/Lesson 13/Exercises';

// conteudo da lesson 14 modulo A1, Aula Par
import ConversationPar14 from './conteudo/Lesson 14/Conversation';
import ReadingWritingPar14 from './conteudo/Lesson 14/ReadingWriting';
import VideoLessonPar14 from './conteudo/Lesson 14/VideoLesson';

// conteudo da lesson 15 modulo A1, Aula Impar
import VocabularyImpar15 from './conteudo/Lesson 15/Vocabulary';
import PronunciationImpar15 from './conteudo/Lesson 15/Pronunciation';
import GrammarImpar15 from './conteudo/Lesson 15/Grammar';
import ExercisesImpar15 from './conteudo/Lesson 15/Exercises';

// conteudo da lesson 16 modulo A1, Aula Par   
import ConversationPar16 from './conteudo/Lesson 16/Conversation';
import ReadingWritingPar16 from './conteudo/Lesson 16/ReadingWriting';
import VideoLessonPar16 from './conteudo/Lesson 16/VideoLesson';

const A1: React.FC = () => {
    const [showContent, setShowContent] = useState(true);
    
    // conteudo da lesson 1 modulo A1, Aula Impar
    const [showAulaImpar1, setShowAulaImpar1] = useState(false);
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
    const [showAulaImpar3, setShowAulaImpar3] = useState(false);
    const [showVocabularyImpar3, setShowVocabularyImpar3] = useState(false);
    const [showPronunciationImpar3, setShowPronunciationImpar3] = useState(false);
    const [showGrammarImpar3, setShowGrammarImpar3] = useState(false);
    const [showExercisesImpar3, setShowExercisesImpar3] = useState(false);

    // conteudo da lesson 4 modulo A1, Aula Par
    const [showAulaPar4, setshowAulaPar4] = useState(false);
    const [showConversationPar4, setShowConversationPar4] = useState(false);
    const [showReadingWritingPar4, setShowReadingWritingPar4] = useState(false);
    const [showVideoLessonPar4, setShowVideoLessonPar4] = useState(false);

    // conteudo da lesson 5 modulo A1, Aula Impar
    const [showAulaImpar5, setShowAulaImpar5] = useState(false);
    const [showVocabularyImpar5, setShowVocabularyImpar5] = useState(false);
    const [showPronunciationImpar5, setShowPronunciationImpar5] = useState(false);
    const [showGrammarImpar5, setShowGrammarImpar5] = useState(false);
    const [showExercisesImpar5, setShowExercisesImpar5] = useState(false);

    // conteudo da lesson 6 modulo A1, Aula Par
    const [showAulaPar6, setshowAulaPar6] = useState(false);
    const [showConversationPar6, setShowConversationPar6] = useState(false);
    const [showReadingWritingPar6, setShowReadingWritingPar6] = useState(false);
    const [showVideoLessonPar6, setShowVideoLessonPar6] = useState(false);

    // conteudo da lesson 7 modulo A1, Aula Impar
    const [showAulaImpar7, setShowAulaImpar7] = useState(false);
    const [showVocabularyImpar7, setShowVocabularyImpar7] = useState(false);
    const [showPronunciationImpar7, setShowPronunciationImpar7] = useState(false);
    const [showGrammarImpar7, setShowGrammarImpar7] = useState(false);
    const [showExercisesImpar7, setShowExercisesImpar7] = useState(false);

    // conteudo da lesson 8 modulo A1, Aula Par
    const [showAulaPar8, setshowAulaPar8] = useState(false);
    const [showConversationPar8, setShowConversationPar8] = useState(false);
    const [showReadingWritingPar8, setShowReadingWritingPar8] = useState(false);
    const [showVideoLessonPar8, setShowVideoLessonPar8] = useState(false);

    // conteudo da lesson 9 modulo A1, Aula Impar
    const [showAulaImpar9, setShowAulaImpar9] = useState(false);
    const [showVocabularyImpar9, setShowVocabularyImpar9] = useState(false);
    const [showPronunciationImpar9, setShowPronunciationImpar9] = useState(false);
    const [showGrammarImpar9, setShowGrammarImpar9] = useState(false);
    const [showExercisesImpar9, setShowExercisesImpar9] = useState(false);

    // conteudo da lesson 10 modulo A1, Aula Par    
    const [showAulaPar10, setshowAulaPar10] = useState(false);
    const [showConversationPar10, setShowConversationPar10] = useState(false);
    const [showReadingWritingPar10, setShowReadingWritingPar10] = useState(false);
    const [showVideoLessonPar10, setShowVideoLessonPar10] = useState(false);

    // conteudo da lesson 11 modulo A1, Aula Impar
    const [showAulaImpar11, setShowAulaImpar11] = useState(false);
    const [showVocabularyImpar11, setShowVocabularyImpar11] = useState(false);
    const [showPronunciationImpar11, setShowPronunciationImpar11] = useState(false);
    const [showGrammarImpar11, setShowGrammarImpar11] = useState(false);
    const [showExercisesImpar11, setShowExercisesImpar11] = useState(false);

    // conteudo da lesson 12 modulo A1, Aula Par
    const [showAulaPar12, setshowAulaPar12] = useState(false);
    const [showConversationPar12, setShowConversationPar12] = useState(false);
    const [showReadingWritingPar12, setShowReadingWritingPar12] = useState(false);
    const [showVideoLessonPar12, setShowVideoLessonPar12] = useState(false);

    // conteudo da lesson 13 modulo A1, Aula Impar
    const [showAulaImpar13, setShowAulaImpar13] = useState(false);
    const [showVocabularyImpar13, setShowVocabularyImpar13] = useState(false);
    const [showPronunciationImpar13, setShowPronunciationImpar13] = useState(false);
    const [showGrammarImpar13, setShowGrammarImpar13] = useState(false);
    const [showExercisesImpar13, setShowExercisesImpar13] = useState(false);

    // conteudo da lesson 14 modulo A1, Aula Par
    const [showAulaPar14, setshowAulaPar14] = useState(false);
    const [showConversationPar14, setShowConversationPar14] = useState(false);
    const [showReadingWritingPar14, setShowReadingWritingPar14] = useState(false);
    const [showVideoLessonPar14, setShowVideoLessonPar14] = useState(false);

    // conteudo da lesson 15 modulo A1, Aula Impar
    const [showAulaImpar15, setShowAulaImpar15] = useState(false);
    const [showVocabularyImpar15, setShowVocabularyImpar15] = useState(false);
    const [showPronunciationImpar15, setShowPronunciationImpar15] = useState(false);
    const [showGrammarImpar15, setShowGrammarImpar15] = useState(false);
    const [showExercisesImpar15, setShowExercisesImpar15] = useState(false);

    // conteudo da lesson 16 modulo A1, Aula Par
    const [showAulaPar16, setshowAulaPar16] = useState(false);
    const [showConversationPar16, setShowConversationPar16] = useState(false);
    const [showReadingWritingPar16, setShowReadingWritingPar16] = useState(false);
    const [showVideoLessonPar16, setShowVideoLessonPar16] = useState(false);
    
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

    const voltarImpar1 = () => {
        setShowAulaImpar1(true);
        setShowVocabularyImpar1(false);
        setShowPronunciationImpar1(false);
        setShowGrammarImpar1(false);
        setShowExercisesImpar1(false);
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

    const voltarPar2 = () => {
        setshowAulaPar2(true);
        setShowConversationPar2(false);
        setShowReadingWritingPar2(false);
        setShowVideoLessonPar2(false);
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

    const voltarImpar3 = () => {
        setShowAulaImpar3(true);
        setShowVocabularyImpar3(false);
        setShowPronunciationImpar3(false);
        setShowGrammarImpar3(false);
        setShowExercisesImpar3(false);
    }

    // conteudo da Lesson 4 modulo A1, Aula Par
    const opensetShowAulaPar4 = () => {
        setshowAulaPar4(true);
        setShowContent(false);
        setShowConversationPar4(false);
        setShowReadingWritingPar4(false);
        setShowVideoLessonPar4(false);
    };

    const showConversationPar4Handler = () => {
        setShowConversationPar4(true);
        setshowAulaPar4(false);
    }

    const showReadingWritingPar4Handler = () => {
        setShowReadingWritingPar4(true);
        setshowAulaPar4(false);
    }

    const showVideoLessonPar4Handler = () => {
        setShowVideoLessonPar4(true);
        setshowAulaPar4(false);
    }

    const closeSetshowAulaPar4 = () => {
        setShowContent(true);
        setshowAulaPar4(false);
    }

    const voltarPar4 = () => {
        setshowAulaPar4(true);
        setShowConversationPar4(false);
        setShowReadingWritingPar4(false);
        setShowVideoLessonPar4(false);
    }

    // conteudo da Lesson 5 modulo A1, Aula Impar
    const opensetShowAulaImpar5 = () => {
        setShowAulaImpar5(true);
        setShowContent(false);
        setShowVocabularyImpar5(false);
        setShowPronunciationImpar5(false);
        setShowGrammarImpar5(false);
        setShowExercisesImpar5(false);
    };

    const showVocabularyImpar5Handler = () => {
        setShowVocabularyImpar5(true);
        setShowAulaImpar5(false);
    }

    const showPronunciationImpar5Handler = () => {
        setShowPronunciationImpar5(true);
        setShowAulaImpar5(false);
    }

    const showGrammarImpar5Handler = () => {
        setShowGrammarImpar5(true);
        setShowAulaImpar5(false);
    }

    const showExercisesImpar5Handler = () => {
        setShowExercisesImpar5(true);
        setShowAulaImpar5(false);
    }

    const closeSetShowAulaImpar5 = () => {
        setShowContent(true);
        setShowAulaImpar5(false);
    }

    const voltarImpar5 = () => {
        setShowAulaImpar5(true);
        setShowVocabularyImpar5(false);
        setShowPronunciationImpar5(false);
        setShowGrammarImpar5(false);
        setShowExercisesImpar5(false);
    }

    // conteudo da Lesson 6 modulo A1, Aula Par
    const opensetShowAulaPar6 = () => {
        setshowAulaPar6(true);
        setShowContent(false);
        setShowConversationPar6(false);
        setShowReadingWritingPar6(false);
        setShowVideoLessonPar6(false);
    };

    const showConversationPar6Handler = () => {
        setShowConversationPar6(true);
        setshowAulaPar6(false);
    }

    const showReadingWritingPar6Handler = () => {
        setShowReadingWritingPar6(true);
        setshowAulaPar6(false);
    }

    const showVideoLessonPar6Handler = () => {
        setShowVideoLessonPar6(true);
        setshowAulaPar6(false);
    }

    const closeSetShowAulaPar6 = () => {
        setShowContent(true);
        setshowAulaPar6(false);
    }

    const voltarPar6 = () => {
        setshowAulaPar6(true);
        setShowConversationPar6(false);
        setShowReadingWritingPar6(false);
        setShowVideoLessonPar6(false);
    }

    // conteudo da Lesson 7 modulo A1, Aula Impar
    const opensetShowAulaImpar7 = () => {
        setShowAulaImpar7(true);
        setShowContent(false);
        setShowVocabularyImpar7(false);
        setShowPronunciationImpar7(false);
        setShowGrammarImpar7(false);
        setShowExercisesImpar7(false);
    };

    const showVocabularyImpar7Handler = () => {
        setShowVocabularyImpar7(true);
        setShowAulaImpar7(false);
    }

    const showPronunciationImpar7Handler = () => {
        setShowPronunciationImpar7(true);
        setShowAulaImpar7(false);
    }

    const showGrammarImpar7Handler = () => {
        setShowGrammarImpar7(true);
        setShowAulaImpar7(false);
    }
    
    const showExercisesImpar7Handler = () => {
        setShowExercisesImpar7(true);
        setShowAulaImpar7(false);
    }

    const closeSetShowAulaImpar7 = () => {
        setShowContent(true);
        setShowAulaImpar7(false);
    }

    const voltarImpar7 = () => {
        setShowAulaImpar7(true);
        setShowVocabularyImpar7(false);
        setShowPronunciationImpar7(false);
        setShowGrammarImpar7(false);
        setShowExercisesImpar7(false);
    }

    // conteudo da Lesson 8 modulo A1, Aula Par
    const opensetShowAulaPar8 = () => {
        setshowAulaPar8(true);
        setShowContent(false);
        setShowConversationPar8(false);
        setShowReadingWritingPar8(false);
        setShowVideoLessonPar8(false);
    };
    
    const showConversationPar8Handler = () => {
        setShowConversationPar8(true);
        setshowAulaPar8(false);
    }

    const showReadingWritingPar8Handler = () => {
        setShowReadingWritingPar8(true);
        setshowAulaPar8(false);
    }

    const showVideoLessonPar8Handler = () => {
        setShowVideoLessonPar8(true);
        setshowAulaPar8(false);
    }

    const closeSetShowAulaPar8 = () => {
        setShowContent(true);
        setshowAulaPar8(false);
    }

    const voltarPar8 = () => {
        setshowAulaPar8(true);
        setShowConversationPar8(false);
        setShowReadingWritingPar8(false);
        setShowVideoLessonPar8(false);
    }

    // conteudo da Lesson 9 modulo A1, Aula Impar
    const opensetShowAulaImpar9 = () => {
        setShowAulaImpar9(true);
        setShowContent(false);
        setShowVocabularyImpar9(false);
        setShowPronunciationImpar9(false);
        setShowGrammarImpar9(false);
        setShowExercisesImpar9(false);
    };

    const showVocabularyImpar9Handler = () => {
        setShowVocabularyImpar9(true);
        setShowAulaImpar9(false);
    }

    const showPronunciationImpar9Handler = () => {
        setShowPronunciationImpar9(true);
        setShowAulaImpar9(false);
    }

    const showGrammarImpar9Handler = () => {
        setShowGrammarImpar9(true);
        setShowAulaImpar9(false);
    }

    const showExercisesImpar9Handler = () => {
        setShowExercisesImpar9(true);
        setShowAulaImpar9(false);
    }

    const closeSetShowAulaImpar9 = () => {
        setShowContent(true);
        setShowAulaImpar9(false);
    }

    const voltarImpar9 = () => {
        setShowAulaImpar9(true);
        setShowVocabularyImpar9(false);
        setShowPronunciationImpar9(false);
        setShowGrammarImpar9(false);
        setShowExercisesImpar9(false);
    }

    // conteudo da Lesson 10 modulo A1, Aula Par
    const opensetShowAulaPar10 = () => {
        setshowAulaPar10(true);
        setShowContent(false);
        setShowConversationPar10(false);
        setShowReadingWritingPar10(false);
        setShowVideoLessonPar10(false);
    };
    
    const showConversationPar10Handler = () => {
        setShowConversationPar10(true);
        setshowAulaPar10(false);
    }

    const showReadingWritingPar10Handler = () => {
        setShowReadingWritingPar10(true);
        setshowAulaPar10(false);
    }

    const showVideoLessonPar10Handler = () => {
        setShowVideoLessonPar10(true);
        setshowAulaPar10(false);
    }

    const closeSetShowAulaPar10 = () => {
        setShowContent(true);
        setshowAulaPar10(false);
    }
    
    const voltarPar10 = () => {
        setshowAulaPar10(true);
        setShowConversationPar10(false);
        setShowReadingWritingPar10(false);
        setShowVideoLessonPar10(false);
    }   

    // conteudo da Lesson 11 modulo A1, Aula Impar
    const opensetShowAulaImpar11 = () => {
        setShowAulaImpar11(true);
        setShowContent(false);
        setShowVocabularyImpar11(false);
        setShowPronunciationImpar11(false);
        setShowGrammarImpar11(false);
        setShowExercisesImpar11(false);
    };
    
    const showVocabularyImpar11Handler = () => {
        setShowVocabularyImpar11(true);
        setShowAulaImpar11(false);
    }

    const showPronunciationImpar11Handler = () => {
        setShowPronunciationImpar11(true);
        setShowAulaImpar11(false);
    }

    const showGrammarImpar11Handler = () => {
        setShowGrammarImpar11(true);
        setShowAulaImpar11(false);
    }

    const showExercisesImpar11Handler = () => {
        setShowExercisesImpar11(true);
        setShowAulaImpar11(false);
    }

    const closeSetShowAulaImpar11 = () => {
        setShowContent(true);
        setShowAulaImpar11(false);
    }

    const voltarImpar11 = () => {
        setShowAulaImpar11(true);
        setShowVocabularyImpar11(false);
        setShowPronunciationImpar11(false);
        setShowGrammarImpar11(false);
        setShowExercisesImpar11(false);
    }

    // conteudo da Lesson 12 modulo A1, Aula Par
    const opensetShowAulaPar12 = () => {
        setshowAulaPar12(true);
        setShowContent(false);
        setShowConversationPar12(false);
        setShowReadingWritingPar12(false);
        setShowVideoLessonPar12(false);
    };
    
    const showConversationPar12Handler = () => {
        setShowConversationPar12(true);
        setshowAulaPar12(false);
    }

    const showReadingWritingPar12Handler = () => {
        setShowReadingWritingPar12(true);
        setshowAulaPar12(false);
    }

    const showVideoLessonPar12Handler = () => {
        setShowVideoLessonPar12(true);
        setshowAulaPar12(false);
    }

    const closeSetShowAulaPar12 = () => {
        setShowContent(true);
        setshowAulaPar12(false);
    }

    const voltarPar12 = () => {
        setshowAulaPar12(true);
        setShowConversationPar12(false);
        setShowReadingWritingPar12(false);
        setShowVideoLessonPar12(false);
    }

    // conteudo da Lesson 13 modulo A1, Aula Impar
    const opensetShowAulaImpar13 = () => {
        setShowAulaImpar13(true);
        setShowContent(false);
        setShowVocabularyImpar13(false);
        setShowPronunciationImpar13(false);
        setShowGrammarImpar13(false);
        setShowExercisesImpar13(false);
    };
    
    const showVocabularyImpar13Handler = () => {
        setShowVocabularyImpar13(true);
        setShowAulaImpar13(false);
    }

    const showPronunciationImpar13Handler = () => {
        setShowPronunciationImpar13(true);
        setShowAulaImpar13(false);
    }

    const showGrammarImpar13Handler = () => {
        setShowGrammarImpar13(true);
        setShowAulaImpar13(false);
    }

    const showExercisesImpar13Handler = () => {
        setShowExercisesImpar13(true);
        setShowAulaImpar13(false);
    }

    const closeSetShowAulaImpar13 = () => {
        setShowContent(true);
        setShowAulaImpar13(false);
    }

    const voltarImpar13 = () => {
        setShowAulaImpar13(true);
        setShowVocabularyImpar13(false);
        setShowPronunciationImpar13(false);
        setShowGrammarImpar13(false);
        setShowExercisesImpar13(false);
    }

    // conteudo da Lesson 14 modulo A1, Aula Par
    const opensetShowAulaPar14 = () => {
        setshowAulaPar14(true);
        setShowContent(false);
        setShowConversationPar14(false);
        setShowReadingWritingPar14(false);
        setShowVideoLessonPar14(false);
    }

    const showConversationPar14Handler = () => {
        setShowConversationPar14(true);
        setshowAulaPar14(false);
    }
    
    const showReadingWritingPar14Handler = () => {
        setShowReadingWritingPar14(true);
        setshowAulaPar14(false);
    }

    const showVideoLessonPar14Handler = () => {
        setShowVideoLessonPar14(true);
        setshowAulaPar14(false);
    }

    const closeSetShowAulaPar14 = () => {
        setShowContent(true);
        setshowAulaPar14(false);
    }

    const voltarPar14 = () => {
        setshowAulaPar14(true);
        setShowConversationPar14(false);
        setShowReadingWritingPar14(false);
        setShowVideoLessonPar14(false);
    }

    // conteudo da Lesson 15 modulo A1, Aula Impar
    const opensetShowAulaImpar15 = () => {
        setShowAulaImpar15(true);
        setShowContent(false);
        setShowVocabularyImpar15(false);
        setShowPronunciationImpar15(false);
        setShowGrammarImpar15(false);
        setShowExercisesImpar15(false);
    };
    
    const showVocabularyImpar15Handler = () => {
        setShowVocabularyImpar15(true);
        setShowAulaImpar15(false);
    }

    const showPronunciationImpar15Handler = () => {
        setShowPronunciationImpar15(true);
        setShowAulaImpar15(false);
    }

    const showGrammarImpar15Handler = () => {
        setShowGrammarImpar15(true);
        setShowAulaImpar15(false);
    }

    const showExercisesImpar15Handler = () => {
        setShowExercisesImpar15(true);
        setShowAulaImpar15(false);
    }

    const closeSetShowAulaImpar15 = () => {
        setShowContent(true);
        setShowAulaImpar15(false);
    }

    const voltarImpar15 = () => {
        setShowAulaImpar15(true);
        setShowVocabularyImpar15(false);
        setShowPronunciationImpar15(false);
        setShowGrammarImpar15(false);
        setShowExercisesImpar15(false);
    }

    // conteudo da Lesson 16 modulo A1, Aula Par
    const opensetShowAulaPar16 = () => {
        setshowAulaPar16(true);
        setShowContent(false);
        setShowConversationPar16(false);
        setShowReadingWritingPar16(false);
        setShowVideoLessonPar16(false);
    }

    const showConversationPar16Handler = () => {
        setShowConversationPar16(true);
        setshowAulaPar16(false);
    }

    const showReadingWritingPar16Handler = () => {
        setShowReadingWritingPar16(true);
        setshowAulaPar16(false);
    }

    const showVideoLessonPar16Handler = () => {
        setShowVideoLessonPar16(true);
        setshowAulaPar16(false);
    }

    const closeSetShowAulaPar16 = () => {
        setShowContent(true);
        setshowAulaPar16(false);
    }

    const voltarPar16 = () => {
        setshowAulaPar16(true);
        setShowConversationPar16(false);
        setShowReadingWritingPar16(false);
        setShowVideoLessonPar16(false);
    }


    return (
        <Stylebody>
            { showContent && (
                <div className="aula">
                    <button onClick={opensetShowAulaImpar1}><img className="imgBtn1" src={img1} alt="uma imagem de um quarto visto da porta de entrada do quarto" /> Lesson 1 - Hello! good morning</button>
                    <button onClick={opensetShowAulaPar2}><img className="imgBtn2" src={img2} alt="uma imagem de um quarto visto de frente da posição da TV" />Lesson 2 - Introducing yourself</button>
                    <button onClick={opensetShowAulaImpar3}>Lesson 3 - </button>
                    <button onClick={opensetShowAulaPar4}>Lesson 4 - </button>
                    <button onClick={opensetShowAulaImpar5}>Lesson 5 -</button>
                    <button onClick={opensetShowAulaPar6}>Lesson 6 -</button>
                    <button onClick={opensetShowAulaImpar7}>Lesson 7 -</button>
                    <button onClick={opensetShowAulaPar8}>Lesson 8 -</button>
                    <button onClick={opensetShowAulaImpar9}>Lesson 9 -</button>
                    <button onClick={opensetShowAulaPar10}>Lesson 10 -</button>
                    <button onClick={opensetShowAulaImpar11}>Lesson 11 -</button>
                    <button onClick={opensetShowAulaPar12}>Lesson 12 -</button>
                    <button onClick={opensetShowAulaImpar13}>Lesson 13 -</button>
                    <button onClick={opensetShowAulaPar14}>Lesson 14 -</button>
                    <button onClick={opensetShowAulaImpar15}>Lesson 15 -</button>
                    <button onClick={opensetShowAulaPar16}>Lesson 16 -</button>
                </div>
            )}
            { showAulaImpar1 && (
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
            { showAulaImpar3 && (
                <div className='conteudo'>
                    <button onClick={showVocabularyImpar3Handler}>Vocabulary</button>
                    <button onClick={showPronunciationImpar3Handler}>Pronunciation</button>
                    <button onClick={showGrammarImpar3Handler}>Grammar</button>
                    <button onClick={showExercisesImpar3Handler}>Exercise</button>
                    <button className='btnFechar' onClick={closeSetShowAulaImpar3}>Voltar</button>
                </div>
            )}
            { showAulaPar4 && (
                <div className='conteudo'>
                    <button onClick={showConversationPar4Handler}>Conversation</button>
                    <button onClick={showReadingWritingPar4Handler}>Reading & writing</button>
                    <button onClick={showVideoLessonPar4Handler}>Video Lesson</button>
                    <button className='btnFechar' onClick={closeSetshowAulaPar4}>Voltar</button>
                </div>
            )}
            { showAulaImpar5 && (
                <div className='conteudo'>
                    <button onClick={showVocabularyImpar5Handler}>Vocabulary</button>
                    <button onClick={showPronunciationImpar5Handler}>Pronunciation</button>
                    <button onClick={showGrammarImpar5Handler}>Grammar</button>
                    <button onClick={showExercisesImpar5Handler}>Exercise</button>
                    <button className='btnFechar' onClick={closeSetShowAulaImpar5}>Voltar</button>
                </div>
            )}
            { showAulaPar6 && (
                <div className='conteudo'>
                    <button onClick={showConversationPar6Handler}>Conversation</button>
                    <button onClick={showReadingWritingPar6Handler}>Reading & writing</button>
                    <button onClick={showVideoLessonPar6Handler}>Video Lesson</button>
                    <button className='btnFechar' onClick={closeSetShowAulaPar6}>Voltar</button>
                </div>
            )}
            { showAulaImpar7 && (
                <div className='conteudo'>
                    <button onClick={showVocabularyImpar7Handler}>Vocabulary</button>
                    <button onClick={showPronunciationImpar7Handler}>Pronunciation</button>
                    <button onClick={showGrammarImpar7Handler}>Grammar</button>
                    <button onClick={showExercisesImpar7Handler}>Exercise</button>
                    <button className='btnFechar' onClick={closeSetShowAulaImpar7}>Voltar</button>
                </div>
            )}
            { showAulaPar8 && (
                <div className='conteudo'>
                    <button onClick={showConversationPar8Handler}>Conversation</button>
                    <button onClick={showReadingWritingPar8Handler}>Reading & writing</button>
                    <button onClick={showVideoLessonPar8Handler}>Video Lesson</button>
                    <button className='btnFechar' onClick={closeSetShowAulaPar8}>Voltar</button>
                </div>
            )}
            { showAulaImpar9 && (
                <div className='conteudo'>
                    <button onClick={showVocabularyImpar9Handler}>Vocabulary</button>
                    <button onClick={showPronunciationImpar9Handler}>Pronunciation</button>
                    <button onClick={showGrammarImpar9Handler}>Grammar</button>
                    <button onClick={showExercisesImpar9Handler}>Exercise</button>
                    <button className='btnFechar' onClick={closeSetShowAulaImpar9}>Voltar</button>
                </div>
            )}
            { showAulaPar10 && (
                <div className='conteudo'>
                    <button onClick={showConversationPar10Handler}>Conversation</button>
                    <button onClick={showReadingWritingPar10Handler}>Reading & writing</button>
                    <button onClick={showVideoLessonPar10Handler}>Video Lesson</button>
                    <button className='btnFechar' onClick={closeSetShowAulaPar10}>Voltar</button>
                </div>
            )}
            { showAulaImpar11 && (
                <div className='conteudo'>
                    <button onClick={showVocabularyImpar11Handler}>Vocabulary</button>
                    <button onClick={showPronunciationImpar11Handler}>Pronunciation</button>
                    <button onClick={showGrammarImpar11Handler}>Grammar</button>
                    <button onClick={showExercisesImpar11Handler}>Exercise</button>
                    <button className='btnFechar' onClick={closeSetShowAulaImpar11}>Voltar</button>
                </div>
            )}
            { showAulaPar12 && (
                <div className='conteudo'>
                    <button onClick={showConversationPar12Handler}>Conversation</button>
                    <button onClick={showReadingWritingPar12Handler}>Reading & writing</button>
                    <button onClick={showVideoLessonPar12Handler}>Video Lesson</button>
                    <button className='btnFechar' onClick={closeSetShowAulaPar12}>Voltar</button>
                </div>
            )}
            { showAulaImpar13 && (
                <div className='conteudo'>
                    <button onClick={showVocabularyImpar13Handler}>Vocabulary</button>
                    <button onClick={showPronunciationImpar13Handler}>Pronunciation</button>
                    <button onClick={showGrammarImpar13Handler}>Grammar</button>
                    <button onClick={showExercisesImpar13Handler}>Exercise</button>
                    <button className='btnFechar' onClick={closeSetShowAulaImpar13}>Voltar</button>
                </div>
            )}
            { showAulaPar14 && (
                <div className='conteudo'>
                    <button onClick={showConversationPar14Handler}>Conversation</button>
                    <button onClick={showReadingWritingPar14Handler}>Reading & writing</button>
                    <button onClick={showVideoLessonPar14Handler}>Video Lesson</button>
                    <button className='btnFechar' onClick={closeSetShowAulaPar14}>Voltar</button>
                </div>
            )}
            { showAulaImpar15 && (
                <div className='conteudo'>
                    <button onClick={showVocabularyImpar15Handler}>Vocabulary</button>
                    <button onClick={showPronunciationImpar15Handler}>Pronunciation</button>
                    <button onClick={showGrammarImpar15Handler}>Grammar</button>
                    <button onClick={showExercisesImpar15Handler}>Exercise</button>
                    <button className='btnFechar' onClick={closeSetShowAulaImpar15}>Voltar</button>
                </div>
            )}
            { showAulaPar16 && (
                <div className='conteudo'>
                    <button onClick={showConversationPar16Handler}>Conversation</button>
                    <button onClick={showReadingWritingPar16Handler}>Reading & writing</button>
                    <button onClick={showVideoLessonPar16Handler}>Video Lesson</button>
                    <button className='btnFechar' onClick={closeSetShowAulaPar16}>Voltar</button>
                </div>
            )}

            {/*  // conteudo da lesson 1 modulo A1, Aula Impar */}
            {showVocabularyImpar1 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar1}>Voltar</button></div><VocabularyImpar1 /></>)}
            {showPronunciationImpar1 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar1}>Voltar</button></div><PronunciationImpar1 /></>)}
            {showGrammarImpar1 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar1}>Voltar</button></div><GrammarImpar1 /></>)}
            {showExercisesImpar1 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar1}>Voltar</button></div><ExercisesImpar1 /></>)}

            {/*  // conteudo da lesson 2 modulo A1, Aula Par */}
            {showConversationPar2 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar2}>Voltar</button></div><ConversationPar2 /></>)}
            {showReadingWritingPar2 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar2}>Voltar</button></div><ReadingWritingPar2 /></>)}
            {showVideoLessonPar2 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar2}>Voltar</button></div><VideoLessonPar2 /></>)}

            {/*  // conteudo da lesson 3 modulo A1, Aula Impar */}
            {showVocabularyImpar3 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar3}>Voltar</button></div><VocabularyImpar3 /></>)}
            {showPronunciationImpar3 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar3}>Voltar</button></div><PronunciationImpar3 /></>)}
            {showGrammarImpar3 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar3}>Voltar</button></div><GrammarImpar3 /></>)}
            {showExercisesImpar3 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar3}>Voltar</button></div><ExercisesImpar3 /></>)}

            {/*  // conteudo da lesson 4 modulo A1, Aula Par */}
            {showConversationPar4 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar4}>Voltar</button></div><ConversationPar4 /></>)}
            {showReadingWritingPar4 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar4}>Voltar</button></div><ReadingWritingPar4 /></>)}
            {showVideoLessonPar4 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar4}>Voltar</button></div><VideoLessonPar4 /></>)}

            {/*  // conteudo da lesson 5 modulo A1, Aula Impar */}
            {showVocabularyImpar5 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar5}>Voltar</button></div><VocabularyImpar5 /></>)}
            {showPronunciationImpar5 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar5}>Voltar</button></div><PronunciationImpar5 /></>)}
            {showGrammarImpar5 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar5}>Voltar</button></div><GrammarImpar5 /></>)} 
            {showExercisesImpar5 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar5}>Voltar</button></div><ExercisesImpar5 /></>)}

            {/*  // conteudo da lesson 6 modulo A1, Aula Par */}
            {showConversationPar6 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar6}>Voltar</button></div><ConversationPar6 /></>)}
            {showReadingWritingPar6 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar6}>Voltar</button></div><ReadingWritingPar6 /></>)}
            {showVideoLessonPar6 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar6}>Voltar</button></div><VideoLessonPar6 /></>)}

            {/*  // conteudo da lesson 7 modulo A1, Aula Impar */}
            {showVocabularyImpar7 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar7}>Voltar</button></div><VocabularyImpar7 /></>)}
            {showPronunciationImpar7 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar7}>Voltar</button></div><PronunciationImpar7 /></>)}
            {showGrammarImpar7 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar7}>Voltar</button></div><GrammarImpar7 /></>)}
            {showExercisesImpar7 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar7}>Voltar</button></div><ExercisesImpar7 /></>)}

            {/*  // conteudo da lesson 8 modulo A1, Aula Par */}
            {showConversationPar8 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar8}>Voltar</button></div><ConversationPar8 /></>)}
            {showReadingWritingPar8 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar8}>Voltar</button></div><ReadingWritingPar8 /></>)}
            {showVideoLessonPar8 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar8}>Voltar</button></div><VideoLessonPar8 /></>)}

            {/*  // conteudo da lesson 9 modulo A1, Aula Impar */}
            {showVocabularyImpar9 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar9}>Voltar</button></div><VocabularyImpar9 /></>)}
            {showPronunciationImpar9 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar9}>Voltar</button></div><PronunciationImpar9 /></>)}
            {showGrammarImpar9 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar9}>Voltar</button></div><GrammarImpar9 /></>)}
            {showExercisesImpar9 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar9}>Voltar</button></div><ExercisesImpar9 /></>)}

            {/*  // conteudo da lesson 10 modulo A1, Aula Par */}
            {showConversationPar10 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar10}>Voltar</button></div><ConversationPar10 /></>)}
            {showReadingWritingPar10 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar10}>Voltar</button></div><ReadingWritingPar10 /></>)}
            {showVideoLessonPar10 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar10}>Voltar</button></div><VideoLessonPar10 /></>)}

            {/*  // conteudo da lesson 11 modulo A1, Aula Impar */}
            {showVocabularyImpar11 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar11}>Voltar</button></div><VocabularyImpar11 /></>)}
            {showPronunciationImpar11 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar11}>Voltar</button></div><PronunciationImpar11 /></>)}
            {showGrammarImpar11 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar11}>Voltar</button></div><GrammarImpar11 /></>)}
            {showExercisesImpar11 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar11}>Voltar</button></div><ExercisesImpar11 /></>)}

            {/*  // conteudo da lesson 12 modulo A1, Aula Par */}
            {showConversationPar12 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar12}>Voltar</button></div><ConversationPar12 /></>)}
            {showReadingWritingPar12 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar12}>Voltar</button></div><ReadingWritingPar12 /></>)}
            {showVideoLessonPar12 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar12}>Voltar</button></div><VideoLessonPar12 /></>)}

            {/*  // conteudo da lesson 13 modulo A1, Aula Impar */}
            {showVocabularyImpar13 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar13}>Voltar</button></div><VocabularyImpar13 /></>)}
            {showPronunciationImpar13 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar13}>Voltar</button></div><PronunciationImpar13 /></>)}
            {showGrammarImpar13 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar13}>Voltar</button></div><GrammarImpar13 /></>)}
            {showExercisesImpar13 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar13}>Voltar</button></div><ExercisesImpar13 /></>)}

            {/*  // conteudo da lesson 14 modulo A1, Aula Par */}
            {showConversationPar14 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar14}>Voltar</button></div><ConversationPar14 /></>)}
            {showReadingWritingPar14 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar14}>Voltar</button></div><ReadingWritingPar14 /></>)}
            {showVideoLessonPar14 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar14}>Voltar</button></div><VideoLessonPar14 /></>)}

            {/*  // conteudo da lesson 15 modulo A1, Aula Impar */}
            {showVocabularyImpar15 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar15}>Voltar</button></div><VocabularyImpar15 /></>)}
            {showPronunciationImpar15 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar15}>Voltar</button></div><PronunciationImpar15 /></>)}
            {showGrammarImpar15 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar15}>Voltar</button></div><GrammarImpar15 /></>)}
            {showExercisesImpar15 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarImpar15}>Voltar</button></div><ExercisesImpar15 /></>)}

            {/*  // conteudo da lesson 16 modulo A1, Aula Par */}
            {showConversationPar16 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar16}>Voltar</button></div><ConversationPar16 /></>)}
            {showReadingWritingPar16 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar16}>Voltar</button></div><ReadingWritingPar16 /></>)}
            {showVideoLessonPar16 && (<><div className='headerBtn'><button className='btnFechar2' onClick={voltarPar16}>Voltar</button></div><VideoLessonPar16 /></>)}
        </Stylebody>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default A1;
import { useState } from 'react';
import { JaaSMeeting } from '@jitsi/react-sdk';
import { Stylebody } from './styles';
import imgCaderno from '../../../assets/caderno.svg';
import AulaA1 from '../../aulas/A1';

const Call = () => {
    const [showContent, setShowContent] = useState(false);
    const [containerClass, setContainerClass] = useState('containerCall');
    const [showAulaA1, setShowAulaA1] = useState(false);

    const toggleContent = () => {
        setShowContent(!showContent);
        setContainerClass(showContent ? 'containerCall' : 'containerCallAlteredStyle');
    };

    const openAulaA1 = () => {
        setShowAulaA1(true);
        setShowContent(false);
    };

    const closeAulaA1 = () => {
        setShowAulaA1(false);
        setShowContent(true);
    };

    return (
        <Stylebody>
            <button className='btnCaderno' onClick={toggleContent}><img src={imgCaderno} alt="" /></button>
            <div className='containerPrincipal'>
                <div className='containerShow'>
                    {showContent && (
                        <div className='contentBtn'>
                        <div className='divBtnConteudos'>
                        <button className='btnConteudo' onClick={openAulaA1}>A1</button>
                        <button className='btnConteudo'>A2</button>
                        <button className='btnConteudo'>A3</button>
                        </div>
                        <div className='divBtnConteudos'>
                        <button className='btnConteudo'>B1</button>
                        <button className='btnConteudo'>B2</button>
                        <button className='btnConteudo'>B3</button>
                        </div>
                        <div className='divBtnConteudos'>
                        <button className='btnConteudo'>C1</button>
                        <button className='btnConteudo'>C2</button>
                        <button className='btnConteudo'>C3</button>
                        </div>
                        <div className='divBtnConteudos'>
                            <button className='btnConteudoConversation'>Conversation</button>
                        </div>
                    </div>
                    )}
                    { showAulaA1 ? (
                        <><button className='btnFecharModulos' onClick={closeAulaA1}>Sair Da Aula</button><AulaA1></AulaA1></>
                        ) : (
                        <></>
                    )}
                </div>
                <div className={containerClass}>
                    <JaaSMeeting
                            appId="vpaas-magic-cookie-d5c26deb672d431c9c6867a7c924899b"
                            roomName="tesdte"
                            jwt="eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtZDVjMjZkZWI2NzJkNDMxYzljNjg2N2E3YzkyNDg5OWIvNzg2MDRhLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE3MDE5NTQ2MDMsImV4cCI6MTcwMTk2MTgwMywibmJmIjoxNzAxOTU0NTk4LCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtZDVjMjZkZWI2NzJkNDMxYzljNjg2N2E3YzkyNDg5OWIiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6ImRpbG5hZXJlbm5hbjg0IiwiaWQiOiJnb29nbGUtb2F1dGgyfDEwMzgwMjE0NzMxODQ0OTU5MjA5NSIsImF2YXRhciI6IiIsImVtYWlsIjoiZGlsbmFlcmVubmFuODRAZ21haWwuY29tIn19LCJyb29tIjoiKiJ9.klcM2jP-0TMoVLKN-bzz1YMVLa1J0m6wvBV4GDx4i2UeE3ID2KiZDxvAwkE9axVQohWYC5GSsNvMBGMmzGVBApX2LJ6oFt43lT2d5I_34HXmgEuWoILNvwGlP29aKUvpeM4l-n5cWV79EFChcg2-iH4H8-vnycNc8SIaxTOLWEWHL9iP6pLQPFyndipMpUA-ckoBcxyZVQqvyrJfFvyY8HgBdMVoojlscbCFtOB0gD5D-N97KDO7f5X8c3s_L3yH2VZ8eRNQVPKRokgnfttNbASChOkyFfyRSMsp-ColBrvYioFGTE-U39NowEGquxjb-psyHAMy_F_3fYT1d4gH-A"
                            getIFrameRef={Node => Node.style.height = '606px'}
                            configOverwrite={{
                                disableThirdPartyRequests: true,
                                disableLocalVideoFlip: true,
                                backgroundAlpha: 0.5
                            }}
                            interfaceConfigOverwrite={{
                                VIDEO_LAYOUT_FIT: 'nocrop',
                                MOBILE_APP_PROMO: false,
                                TILE_VIEW_MAX_COLUMNS: 4
                            }}
                            onApiReady={(/*externalApi*/) => {
                                // Lógica quando a API estiver pronta
                            }}
                        />
                </div>
            </div>
        </Stylebody>
    );
};

export default Call;

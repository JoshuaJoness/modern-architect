import React from 'react';
import ReactPlayer from 'react-player';
import styles from '../../styles/styles.module.scss';


const ZenChat = ({ mobile }) => (
    <div className={mobile ? styles.zenChatContainerMobile : styles.zenChatContainer}>
        <div style={{ padding: 100 }}>
            <span className={mobile? styles.titleMobile : styles.title} style={{ color: '#333' }}>ZenChat</span>
            <ReactPlayer
                className='react-player fixed-bottom'
                url='/videos/zenChat.mov'
                width='60vw'
                height='100%'
                controls={true}
                playing={true}
                loop={true}
                style={{ display:'block', margin: 'auto' }}
                muted
            />
            <p className={mobile ? styles.descriptionMobile : styles.description} style={{ color: '#333', width: '60vw', margin: '75px auto', textAlign: 'center' }}>
            A chat app built with <span style={{ color: 'yellowGreen' }}>React</span>, <span style={{ color: 'yellowGreen' }}>Node</span>, and <span style={{ color: 'yellowGreen' }}>web sockets</span>.
            Join one of our many rooms or create your own. 🧘‍♂️
            <br/><br/>
            <span style={{ color: '#333' }}>Visit: </span>
            <a href="https://zenchaat.herokuapp.com/" target="_blank">https://zenchaat.herokuapp.com/</a>
            </p>
        </div>
    </div>    
);

export default ZenChat;

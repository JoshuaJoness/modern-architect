import React from 'react';
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/styles.module.scss';

const Contact = ({ mobile }) => (
    <div 
        id="contact"
        className={mobile ? styles.titleMobile : styles.title} 
        style={
            mobile ? { padding: '5vh' } 
            :   { 
                    backgroundColor: '#333', 
                    color: 'grey', 
                    fontSize: 22, 
                    padding: '5vh'
                }}>
        <div style={{ display: 'flex', width: !mobile ? '40%' : undefined, marginRight: 'auto', marginLeft: mobile ? 0 : 50, alignItems: 'center', flexDirection: mobile ? 'column' : undefined }}>
            <img 
                src="/images/candidSquare.jpg"
                style={mobile ? { height: '170px', margin: 'auto', display: 'block', borderRadius: '100%' } : { height: '250px', borderRadius: '100%' }}
            />
            <ul className={mobile ? styles.contactListMobile : styles.contactList}>
                <li style={{ fontSize: mobile ? 28 : 36, color: 'grey' }}>Joshua Jones</li>
                <li style={{ fontSize: mobile ? 16 :18, color: 'pink', marginBottom: mobile ? 10 : 25 }}>Creative Fullstack Developer</li>
                <li style={{ textTransform: 'none', marginBottom: 5, fontSize: mobile ? 18 : undefined }}>joshuajonesdev@gmail.com</li>
                {mobile ? <li style={{ textTransform: 'none', marginBottom: 5, fontSize: mobile ? 18 : undefined }}>
                <a href="https://github.com/JoshuaJoness" target="_blank">
                        GitHub
                    </a>
                </li> : null}
                {mobile ? null : <li>
                    <a href="https://github.com/JoshuaJoness" target="_blank">
                        <FontAwesomeIcon icon={faCode} style={{ fontSize: 22, color: 'lightgrey' }} />
                    </a>
                </li>}
            </ul>
            {/* <div className={styles.imageTwo} /> */}
        </div>
    </div> 
);

export default Contact;

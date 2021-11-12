import React from 'react';
import styles from '../../styles/styles.module.scss';

const About = ({ mobile }) => (
        <div id="about" style={{  marginTop: '-100vh', /* TODO debug  */backgroundColor: '#000', height: '125vh', color: 'grey' }}>
            <div className={mobile ? styles.aboutContainerMobile : styles.aboutContainer}>
                <span className={mobile ? styles.titleMobile : styles.title} style={{ color: 'pink', marginBottom: 20, fontSize: 50, marginTop: 150 }}>Who am I?</span>
                {mobile ? 
                    <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto 20px', fontSize: 22 }}>
                    <p style={{ alignSelf: 'center' }}>A<br/><span className={styles.aboutHighlight} style={{ fontSize: 22 }}>creative <br/>fullstack <br/>developer 👨‍💻&nbsp;</span></p>
                </div>
                    : 
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ alignSelf: 'center' }}>A <span className={styles.aboutHighlight} style={{ fontSize: 42 }}>creative fullstack developer. 👨‍💻&nbsp;</span></p>
                        <p style={{ alignSelf: 'center', textAlign: 'center' }}>
                            Understands <span className={styles.aboutHighlight}>business needs.&nbsp;</span>&nbsp;<br/>
                            Takes<span className={styles.aboutHighlight}>&nbsp;ownership&nbsp;</span>.&nbsp;<br/>
                            Builds with <span className={styles.aboutHighlight}>empathy&nbsp;</span>.<br/>
                        </p>
                    </div>
                }
            </div>
        </div>
);

export default About;

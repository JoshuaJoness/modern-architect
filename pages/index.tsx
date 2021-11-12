

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Canvas } from '@react-three/fiber';
import Navbar from '../components/Navbar';
import Lights from '../components/Lights';
import Model from '../components/Model';
import Footer from '../components/Footer';
import TransitionArray from '../components/projs/About';
import About from '../components/About';
import CalorieCam from '../components/CalorieCam';
import ZenChat from '../components/ZenChat';
import Contact from '../components/Contact';
import styles from '../styles/home.module.scss';

export default function Home() {
    const [windowWidth, setWindowWidth] = useState(Infinity);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        setWindowWidth(window.visualViewport.width);
    }, [typeof window !== 'undefined' ? window.visualViewport.width : null])

    useEffect(() => {
        if (windowWidth <= 870) 
            setMobile(true);
    }, [windowWidth])

    useEffect(() => {
        console.log(window.visualViewport.offsetTop)
    }, [typeof window !== 'undefined' ? window.visualViewport.offsetTop : null])

    return (
        <div>
            <Head>
                <title>Modern Architect Joshua Jones</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link 
                    href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;900&family=Noto+Sans+Mono:wght@300&family=Noto+Sans:wght@700&display=swap" 
                    rel="stylesheet" 
                />
                <script src="https://kit.fontawesome.com/55e3b7e98a.js" crossOrigin="anonymous"></script>
            </Head>
            {/* <Canvas camera={{ position: [0, 0, 300] }} style={{ height: 300, width: 200, position: 'absolute', top: 0, right: 0 }}>
                    <Lights />
                    <Model />
            </Canvas> */}
            <Navbar mobile={mobile} />
            {/* {mobile ? <h1 style={{ position: 'absolute', top: 0, zIndex: 9999 }}> Joshua Jones</h1> : null} */}
            <div id="home" className={styles.image} style={mobile ? { backgroundPosition: 'unset' } : {}} />
            <body style={{ margin: 0, backgroundColor: '#333' }}>
                <About mobile={mobile} />
                <CalorieCam mobile={mobile} />
                <ZenChat mobile={mobile} />
                <div className={styles.imageTwo} />
                <Contact mobile={mobile} />
            </body>
        </div>
    )
};

//TODO Piture i.e. Bali 2019 ; Scarborough Bluffs 2018
// <br /><br/>
// mention and link Trent, Boardera, Tortuga Coders
// <br /><br/>
// Link to blog, YouTube
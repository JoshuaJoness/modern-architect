

import Head from 'next/head';
import { Canvas } from '@react-three/fiber';
import Navbar from '../components/Navbar';
import Lights from '../components/Lights';
import Model from '../components/Model';
import Footer from '../components/Footer';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
      <div className={styles.container}>
          <Canvas camera={{ position: [0, 0, 300] }} style={{ height: '100vh', width: '100vw' }}>
                <Lights />
                <Model />
          </Canvas>
          {/* <Navbar /> */}
          <Head>
              <title>Modern Architect Joshua Jones</title>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link 
                  href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;900&family=Noto+Sans+Mono:wght@300&family=Noto+Sans:wght@700&display=swap" 
                  rel="stylesheet" 
              />
              <script src="https://kit.fontawesome.com/55e3b7e98a.js" crossorigin="anonymous"></script>
          </Head>
          <main>
              <div className={styles.image} />
              {/* <div>
                  <p className={styles.description} style={{ color: 'white'}}>A digital nomad with a passion for design</p>
              </div> */}
          </main>
          {/* <Footer /> */}
      </div>
  )};

  // where I am 
  // loading threeJs model
  // example require textures folder and gltf.bin in the root, can copy form GitHub
  // would rather just login to SketchFab
  // and use my own model
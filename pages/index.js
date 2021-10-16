import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import Head from 'next/head'
import Link from 'next/link'
const img = '/draw.jpg'
const calorieCam = '/calorieCam.mp4'

export default function Home() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
  })


  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;900&family=Noto+Sans+Mono:wght@300&family=Noto+Sans:wght@700&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/55e3b7e98a.js" crossorigin="anonymous"></script>
      </Head>

      <main>
        <div className="image" />
        {/* <h1 className="title" style={{ position: 'absolute', top: 0 }}>Modern Architect</h1> */}
        <animated.div 
          {...bind()} 
          style={{ 
              x, 
              y, 
              height: 900, 
              width: 900, 
              backgroundColor: 'white', 
              borderRadius: 5, 
              position: 'absolute', 
              top: 30, 
              right: 30,
              padding: 20, 
              display: 'flex',
              // flexDirection: 'column'
            }}>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= '/calorieCam.mp4'
            width='100%'
            height='100%'
            controls = {false}
            playing={true} 

            loop={true}

            />
              <div style={{ flex: 2, padding: 10 }}>
              <span className="description">Calorie Cam</span>
              <span className="subtext">A simple calorie counting app. Features image recognition, food logging, and micronutrient information. No sign up or log-in required.</span>
              <i className="fab fa-app-store-ios" style={{ color: 'purple' }} />
            </div>
          </animated.div>
          <div>
            <p className="description" style={{ color: 'white'}}>A digital nomad with a passion for design</p>
          </div>
          {/* <div style={{ height: 2000 }} /> */}
      </main>

      {/* <footer> */}
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          {/* Powered by{' '} */}
          {/* <img src="/vercel.svg" alt="Vercel" className="logo" /> */}
        {/* </a> */}
      {/* </footer> */}

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .image {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-image: url(${img});
          z-index: -1;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          text-decoration: none;
          font-family: 'Merriweather', serif;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          font-family: 'Noto Sans', sans-serif;
          font-weight: 700;
          display: block;
        }

        .subtext {
          line-height: 1.5;
          font-family: 'Noto Sans', sans-serif;
          font-weight: 400;
          color: grey;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
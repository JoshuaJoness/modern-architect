import ReactPlayer from 'react-player';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import styles from '../../styles/projects.module.scss';
import Navbar from '../../components/Navbar';

const Projects = () => {
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

    const bind = useDrag(({ down, movement: [mx, my] }) => {
      api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
    })

    return (
        <div>
          {/* <Navbar /> */}
            <animated.div 
                {...bind()} 
                style={{ 
                        x, 
                        y, 
                        height: '100vh', 
                        width: '100vw', 
                        backgroundColor: '#333', 
                        borderRadius: 5, 
                        // position: 'absolute', 
                        // top: 30, 
                        // right: 30,
                        padding: 20, 
                        // display: 'flex',
                    }}
            >
              <div style={{ /* display: 'flex' *//* , flexDirection: 'column', alignItems: 'center' */ }}>
                  
                  <div style={{ display: 'flex', padding: 100 }}>
                  
                  <p className={styles.description} style={{ width: '40vw', paddingRight: '10%' }}>
                  <span className={styles.title}>Calorie Cam</span>
                  <span className={styles.description}>Simple, easy to use calorie counting app.&nbsp;</span>
                    <span className={styles.highlight}>
                      No sign up or log-in required.&nbsp;
                    </span>
                    Offers <span className={styles.highlight}>image recognition&nbsp;</span>and&nbsp;<span className={styles.highlight}>food log&nbsp;</span>
                    Makes it easy to track your macro and <span className={styles.highlight}>micronutrient intake.</span>
                  </p>
                  {/* <ul>
                    <li className={styles.bullet}>image recognition</li>
                    <li className={styles.bullet}>food log</li>
                    <li className={styles.bullet}>micronutrient information</li>
                    <li className={styles.bullet}>No sign up or log-in required</li>
                  </ul> */}
                  {/* <span className={styles.description}>A simple calorie counting app. Features image recognition, food logging, and micronutrient information. No sign up or log-in required.</span> */}
              <ReactPlayer
                  className='react-player fixed-bottom'
                  url= '/calorieCam.mp4'
                  width='20vw'
                  height='100%'
                  controls={true}
                  playing={true}
                  loop={true}
                  style={{ display:'block'}}
              />
                                {/* <ul>
                    <li className={styles.bullet}>image recognition</li>
                    <li className={styles.bullet}>food log</li>
                    <li className={styles.bullet}>micronutrient information</li>
                    <li className={styles.bullet}>No sign up or log-in required</li>
                  </ul> */}
                </div>

            </div>
          </animated.div>

          <div style={{ height: '125vh', width: '100vw', backgroundColor: 'white' }}>
              <div  style={{ padding: 100 }}>
              <span className={styles.title} style={{ color: '#333' }}>ZenChat</span>
              <ReactPlayer
                  className='react-player fixed-bottom'
                  url= '/videos/zenChat.mov'
                  width='60vw'
                  height='100%'
                  controls={true}
                  playing={true}
                  loop={true}
                  style={{ display:'block', margin: 'auto' }}
              />
                  <p className={styles.description} style={{ color: '#333', width: '60vw', margin: '75px auto', textAlign: 'center' }}>
                    A chat app built with <span style={{ color: 'yellowGreen' }}>React</span>, <span style={{ color: 'yellowGreen' }}>Node</span>, and <span style={{ color: 'yellowGreen' }}>web sockets</span>.
                    Join one of our many rooms or create your own. 🧘‍♂️
                  </p>
              </div>
          </div>    


          <div className={styles.title} style={{ height: '110vh', marginBottom: -20 /* TODO fix gap */, backgroundColor: '#000', color: 'grey', padding: 100, fontSize: 38, textAlign: 'left', display: 'flex' }}>
            <div style={{ alignSelf: 'center', margin: 'auto', }}>
              <img 
                src="/images/candidSquare.jpg"
                style={{ height: '350px', margin: 'auto', borderRadius: '100%' }}
              />
              <ul style={{ listStyleType: 'none' }}>
                <li style={{ color: '#fff', fontSize: 62 }}>Joshua Jones</li>
                <li style={{ color: 'pink', fontSize: 48 }}>Web Developer</li>
                <li style={{ color: 'grey' }}>438-458-8808</li>
                <li style={{ color: 'grey', textTransform: 'none' }}>joshuajonesdev@gmail.com</li>
                {/* <li style={{ color: 'white' }}>Instagram</li> */}
              </ul>
            </div>
          </div> 
        </div>
    )
}

export default Projects;
import ReactPlayer from 'react-player';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import styles from '../../styles/projects.module.scss';

const Projects = () => {
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

    const bind = useDrag(({ down, movement: [mx, my] }) => {
      api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
    })

    return (
        <div>
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
                    }}
            >
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
              <span /* className="description" */ className={styles.red}>Calorie Cam</span>
              <span className="subtext">A simple calorie counting app. Features image recognition, food logging, and micronutrient information. No sign up or log-in required.</span>
              <i className="fab fa-app-store-ios" style={{ color: 'purple' }} />
            </div>
          </animated.div>
        </div>
    )
}

export default Projects;
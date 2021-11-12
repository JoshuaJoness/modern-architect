import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import { config, animated, useTransition } from '@react-spring/web'


// const About = () => (
//     <div className={styles.container}>
//         <span className={styles.whoAmI}>Who am I?</span>
//             <div className={styles.description} style={{ fontSize: 48, paddingLeft: 50, width: '60vw', margin: '0 auto', textAlign: 'justify' }} id="about">
//                 A modern-day digital craftsman, specializing in <span style={{ color: 'gray' }}>fullstack web development. 👨‍💻&nbsp;</span>
//                 <br/>
//                 <br/>
//                 Someone who understands and connects with&nbsp;<span style={{ color: 'gray' }}>business needs. 📈&nbsp;</span>
//                 Shows 
//                 <span style={{ color: 'gray' }}
//                 >empathy
//                 </span> for end-users. 
//                 <br/>
//                 <br/>
//                 Takes <span style={{ color: 'gray' }}>ownership</span> but also knows when to <span style={{ color: 'gray' }}>collaborate.</span>
//                 <br/>
//                 <br/>
//                 A <span style={{ color: 'pink' }}>coder</span>, a <span style={{ color: 'pink' }}>communicator</span>, a <span style={{ color: 'pink' }}>creator 👨‍🎨</span>
//             </div> 
//             {/* <img src="/images/monkey.jpg" style={{ width: 800, height: '100%', marginBottom: 50 }} /> */}
//     </div>
// );

// export default /* About; */

const NUM_TRANS = [{ op: 1, trans: 0, }]


function TransitionArray() {
const [index, setIndex] = useState(0);

useEffect(() => void setInterval(() => setIndex((state) => (state + 1) % 3), 4000), []);

const texts = [
    {id: 0, text: "Chiptuning osobních aut"},
    {id: 1, text: "Chiptuning nákladních aut"},
    {id: 2, text: "Chiptuning zemědělské techniky"},
  ];

const textTransitions = useTransition(texts[index], {
    from: { opacity: 0, transform: "translate3d(0,-15%,0) scale3d(1,1.1,1)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0) scale3d(1,1,1)" },
    leave: { opacity: 0, transform: "translate3d(0,15%,0) scale3d(1,0.95,1)" },
    config: config.gentle,
    key: texts[index].id,
  });

return(
<div>
 {textTransitions((props, item) => (
      <animated.div className="sliderText" style={props}>
        <h1>
          <span>A</span>utorizovaný chiptuning QUANTUM
        </h1>
        <p>{item.text}</p>
      </animated.div>
   ))}
</div>
)};

  export default TransitionArray
import Link from 'next/link';
// import { faCode, faEnvelopeOpen, faHome } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/navbar.module.scss';

export default ({ mobile }) => (
    mobile ? 
    <div className={styles.containerMobile}>
        <a>
            <Link href="#home">
            {/* <FontAwesomeIcon icon={faHome} style={{ fontSize: 30, color: 'white' }} /> */}
            <span>HOME</span>
            </Link>
        </a>
        <a>
            <Link href="#code">
                    {/* <FontAwesomeIcon icon={faCode}  /> */}
                    <span>CODE</span>
            </Link>
        </a>
        <a>
            <Link href="#contact">
                {/* <FontAwesomeIcon icon={faEnvelopeOpen} style={{ fontSize: 30, color: 'white' }} /> */ }
                <span>CONTACT</span>
            </Link>
        </a>
    </div>
    :
    <ul className={styles.container}> 
        <li>
            <a className={styles.joshuaJones}>
                <Link href="/">Joshua Jones</Link>
            </a>
        </li>
        <li style={{ alignSelf: 'center', width: '25vw', display: 'flex', justifyContent: 'space-between', marginRight: 200 }}>
            <li>
                <a className={styles.link}>
                    <Link href="#about">About</Link>
                </a>
            </li>
            <li>
                <a className={styles.link}>
                    <Link href="#code">Code</Link>
                </a>
            </li>
            <li>
                <a className={styles.link}>
                    <Link href="#contact">Contact</Link>
                </a>
            </li>
        </li>
    </ul>
);
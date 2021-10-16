import Link from 'next/link';
import styles from '../styles/navbar.module.scss';

export default () => (
    <ul className={styles.container}> 
        <li>
            <a className={styles.link}>
                <Link href="projects" className={styles.link}>Code</Link>
            </a>
        </li>
        <li>
            <a className={styles.link}>
                <Link href="projects" className={styles.link}>Pictures</Link>
            </a>
        </li>
        <li>
            <a className={styles.link}>
                <Link href="projects" className={styles.link}>Words</Link>
            </a>
        </li>
    </ul>
);
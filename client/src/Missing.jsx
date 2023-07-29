import { Link } from 'react-router-dom';
import styles from './styles/Missing.module.css'

const Missing = () => {
    return (
        <main className={styles.missing}>
            <h2>Page Not Found</h2>
            <p>
                <Link to='/' onClick={() => {if (window.scrollY !== 0) window.scrollTo(0,0)}}>Return to To-Do List</Link>
            </p>
        </main>
    )
}

export default Missing
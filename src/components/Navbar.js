import { Link } from 'react-router-dom'

//styles
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>My - Invoice</li>

                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                {/* <li><Link to="/Load">Load</Link></li> */}
            </ul>
        </nav>
    )
}

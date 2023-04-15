import styles from'./Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.teste}>Home</li>
                <li>Campeões</li>
                <li>Perfil</li>
            </ul>
        </nav>
    )
}

export default Navbar
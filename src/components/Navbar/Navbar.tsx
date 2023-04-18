import styles from'./Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <img src='./logoNavbar.svg'/>
            <ul>
                <li>Home</li>
                <li>Campeões</li>
                <li>Perfil</li>
            </ul>
        </nav>
    )
}

export default Navbar
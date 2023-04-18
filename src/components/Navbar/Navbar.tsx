import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoGroup}>
                <img className={styles.imgLogoRiotGames} src='src\assets\Home\Logo\mainLogoRiotFirst.svg' />
                <img className={styles.imgLogoRiotGamesLetter} src='src\assets\Home\Logo\logoRiotCirculo.svg'/>
            </div>
            <ul className={styles.ulFirst}>
                <li><a>O jogo</a></li>
                <li><a>Campeões</a></li>
                <li><a>Notícias</a></li>
                <li><a>Notas de atualizações</a></li>
                <li><a>Comunidade</a></li>
                <li><a>Esports</a></li>
                <li><a>Universo</a></li>
                <li><a>Criador de Avatar</a></li>
            </ul>
            <ul className={styles.ulSecond}>
                <li><img className={styles.search} src='src\assets\Home\Logo\search.svg' /></li>
                <li><img className={styles.globoIcon} src='src\assets\Home\Logo\globoIcon.svg' /></li>
                <li className={styles.beginSession}>iniciar Sessão</li>
                <li className={styles.playNow}>Jogue Agora</li>
            </ul>
        </nav>
    )
}

export default Navbar
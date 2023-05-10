import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoGroup}>
                <a>
                    <img className={styles.imgLogoRiotGames} src={'./src/assets/Home/Logo/mainLogoRiotFirst.svg'} />
                    <img className={styles.mainNavArrowDown} src='src\assets\Home\Logo\mainNavArrowDown.svg' />
                </a>
                <a href="/">
                    <img className={styles.imgLogoRiotGamesLetter} src='src\assets\Home\Logo\imgLogoRiotGamesLetter.svg' />
                </a>
            </div>
            <ul className={styles.ulFirst}>
                <li><a href='https://www.leagueoflegends.com/pt-br/how-to-play/'>O jogo</a></li>
                <li><a href='/champions'>Campeões</a></li>
                <li>
                    <a>
                        Notícias
                        <img className={styles.mainNavArrowDown} src='src\assets\Home\Logo\mainNavArrowDown.svg' />
                    </a>
                </li>
                <li><a>Notas de atualizações</a></li>
                <li>
                    <a>
                        Comunidade
                        <img className={styles.mainNavArrowDown} src='src\assets\Home\Logo\mainNavArrowDown.svg' />
                    </a>
                </li>
                <li>
                    <a>
                        Esports
                        <img className={styles.mainNavLinkOut} src='src\assets\Home\Logo\mainNavLinkOut.svg' />
                    </a>
                </li>
                <li>
                    <a>
                        Universo
                        <img className={styles.mainNavLinkOut} src='src\assets\Home\Logo\mainNavLinkOut.svg' />
                    </a>
                </li>
                <li>
                    <a>
                        Suporte
                        <img className={styles.mainNavLinkOut} src='src\assets\Home\Logo\mainNavLinkOut.svg' />
                    </a>
                </li>
                <li>
                    <a>
                        Mais
                        <img className={styles.mainNavArrowDown} src='src\assets\Home\Logo\mainNavArrowDown.svg' />
                    </a>
                </li>
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
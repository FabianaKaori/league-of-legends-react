import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.containerFooter}>
            <div className={styles.videoGroup}>
                <video autoPlay muted loop className={styles.videoFooter}>
                    <source src='src\assets\Home\Video\sylasGarenLux.mp4' type="video/mp4" />
                </video>
                <div className={styles.borderButton}>
                    <button className={styles.buttonVideo}>Jogue Agora</button>
                </div>
            </div>

            <div className={styles.downloadGroup}>
                <h2>leve o league com você</h2>
                <p>Baixe o aplicativo do League para sempre estar conectado aos seus amigos e ter acesso às partidas e notícias mais recentes dos Esports.</p>
                <div className={styles.imgGroup}>
                    <img className={styles.appStoreLogo} src='src\assets\Home\Logo\appStore.svg' />
                    <img className={styles.googlePlayLogo} src='src\assets\Home\Logo\googlePlay.svg' />
                </div>
            </div>
            <ul className={styles.linkGroup}>
                <li><a>Sobre league of legends</a></li>
                <li><a>Ajude-nos a melhorar</a></li>
                <li><a>status de serviço</a></li>
                <li><a>Suporte</a></li>
                <li><a>Torneios independentes</a></li>
                <li><a>Baixe o aplicativo de celular riot mobile</a></li>
            </ul>
            <div className={styles.finishGroup}>
                <div className={styles.iconYoutube}>
                    <img src='src\assets\Home\Logo\youtube.svg' title='Youtube' />
                    <img src='src\assets\Home\Logo\twitter.svg' title='Twitter' />
                    <img src='src\assets\Home\Logo\facebook.svg' title='Facebook' />
                    <img src='src\assets\Home\Logo\instagram.svg' title='Instagram' />
                    <img src='src\assets\Home\Logo\reddit.svg' title='Reddit' />
                </div>
                <div className={styles.riotLogoFooter}>
                    <img src='src\assets\Home\Logo\riotGamesFooter.svg' title='Riot Games' />

                    <p>™ & © 2023 Riot Games, Inc. Todos os direitos reservados. Riot Games, League of Legends e PvP.net são marcas registradas e marcas de serviço da Riot Games, Inc.</p>
                </div>


                <ul className={styles.linkEula}>
                    <li><a>Eula</a></li>
                    <li><a>Aviso de privacidade</a></li>
                    <li><a>Termos de uso</a></li>
                    <li><a>Preferências de cookies</a></li>
                </ul>

                <div className={styles.cardParentalRating}>
                    <div className={styles.parentalRating}>
                        <img src='src\assets\Home\Logo\12.png' title='Classificação indicativa 12 anos' />
                        <ul>
                            <li>Violência</li>
                            <li>Conteúdo Sexual</li>
                            <li>Linguagem Imprópria</li>
                            <li>Compras On-line</li>
                            <li>Interação de Usuários</li>
                        </ul>

                    </div>
                </div>

            </div>

        </div>




    );
}

export default Footer
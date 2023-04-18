import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.containerFooter}>
            <video width={300} height={500} autoPlay muted loop className={styles.videoFooter}>
                <source src="src\assets\Home\Video\Vi_Caitlyn_Urgot.mp4" type="video/mp4" />
            </video>

            {/* <button className={styles.buttonVideo}>Jogue Agora</button> */}

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


        </div>




    );
}

export default Footer
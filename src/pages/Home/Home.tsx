import styles from './Home.module.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <section>
                <div className={styles.containerHeadHome}>
                    <video className={styles.videoHomeBackground} autoPlay muted loop>
                        <source src='src/assets/Home/Video/video_home.webm' type="video/mp4" />
                    </video>

                    <div className={styles.borderVideo}>

                    <div className={styles.videoGroup}>
                        <video autoPlay muted loop className={styles.videoHomeTitle}>
                            <source src='src/assets/Home/Video/video_home.webm' type="video/mp4" />
                        </video>
                        <div className={styles.imgButtonGroup}>

                            <img className={styles.imgLeague} src='/src/assets/Home/Logo/logo-1200.png' />

                            <div className={styles.borderButton}>
                                <button className={styles.buttonVideo}>
                                    <Link to="/">Jogue de Graça</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section >
            <section>
                <div className={styles.groupTextHomeChampion}>
                    <p className={styles.escolhaSeu}>ESCOLHA SEU</p>
                    <h1 className={styles.campeaoHomeh1}>CAMPEÃO</h1>
                    <p className={styles.textPChampion}>Quer você goste de se jogar na batalha, ajudar seus aliados ou os dois, existe um lugar para você no Rift.</p>
                    <div className={styles.groupBtnHomeChampion}>
                        <button className={styles.btnDescubraMais}><Link to= "/champions">DESCUBRA MAIS CAMPEÕES</Link></button>
                        <button className={styles.playNow}>JOGAR AGORA</button>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Home
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <section>
                <div className={styles.containerHeadHome}>
                    
                    <video className={styles.videoHomeBackground} autoPlay muted loop>
                        <source src='src/assets/Home/Video/video_home_blurred.webm' type="video/mp4" />
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

            <div>
                <nav>
                <div className={styles.iconGroup}>
                    <img src='' title='assassinos'/>
                    <img src='' title='lutadores'/>
                    <img src='' title='magos'/>
                    <img src='' title='atiradores'/>
                    <img src='' title='suportes'/>
                    <img src='' title='tanques'/>
                </div>
                <div className={styles.videoGroupLane}>
                    <video autoPlay muted loop >
                        <source src='' title='assassinos/webm'></source>
                    </video>

                    <video autoPlay muted loop >
                        <source src='' title='lutadores/webm'></source>
                    </video>

                    <video autoPlay muted loop >
                        <source src='' title='magos/webm'></source>
                    </video>

                    <video autoPlay muted loop >
                        <source src='' title='atiradores/webm'></source>
                    </video>

                    <video autoPlay muted loop >
                        <source src='' title='suportes/webm'></source>
                    </video>

                    <video autoPlay muted loop >
                        <source src='' title='tanques/webm'></source>
                    </video>
                </div>

                <div className={styles.imgGroupLanes}>
                    <img src='' title='assassinoAkali'/>
                    <img src='' title='lutadorYasuo'/>
                    <img src='' title='magoLux'/>
                    <img src='' title='atiradorJinx'/>
                    <img src='' title='suporteThresh'/>
                    <img src='' title='tanqueLeona'/>
                </div>

                <div className={styles.descriptionGroupChampions}>
                    <p className={styles.descriptionChampion}>
                        <strong className={styles.descriptionChampionName}>Akali</strong>
                        <span className={styles.descriptionChampionDescription}>A Assasina Renegada</span>
                    </p>

                    <p className={styles.descriptionChampion}>
                        <strong className={styles.descriptionChampionName}>Yasuo</strong>
                        <span className={styles.descriptionChampionDescription}>O Imperdoável</span>
                    </p>

                    <p className={styles.descriptionChampion}>
                        <strong className={styles.descriptionChampionName}>Lux</strong>
                        <span className={styles.descriptionChampionDescription}>A Dama da Luz</span>
                    </p>

                    <p className={styles.descriptionChampion}>
                        <strong className={styles.descriptionChampionName}>Jinx</strong>
                        <span className={styles.descriptionChampionDescription}>O Gatilho Desenfreado</span>
                    </p>

                    <p className={styles.descriptionChampion}>
                        <strong className={styles.descriptionChampionName}>Thresh</strong>
                        <span className={styles.descriptionChampionDescription}>O Guardião das Correntes</span>
                    </p>

                    <p className={styles.descriptionChampion}>
                        <strong className={styles.descriptionChampionName}>Leona</strong>
                        <span className={styles.descriptionChampionDescription}>A Alvorada Radiante</span>
                    </p>
                </div>

                </nav>

            </div>

        </>
    )
}

export default Home
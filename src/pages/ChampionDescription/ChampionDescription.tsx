import styles from './ChampionDescription.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function ChampionDescription() {
    const [riotApi] = useState<string>("https://ddragon.leagueoflegends.com")
    const [apiVersion, setApiVersion] = useState<string>()
    const [champion, setChampion] = useState<any>()
    const { championId } = useParams()


    useEffect(() => {
        axios.get(`${riotApi}/api/versions.json`)
            .then((response) => {
                setApiVersion(response.data[0])
            })
    }, [])

    useEffect(() => {
        if (apiVersion) {
            axios.get(`${riotApi}/cdn/${apiVersion}/data/pt_BR/champion/${championId}.json`)
            .then((response) => {
                setChampion(response.data.data[championId!])
                console.log(response.data.data[championId!])
            })
        }
    }, [apiVersion])

    return (
        <>{champion &&
            <div className={styles.container}>
                <section className={styles.sectionFirst}>
                    <div className={styles.backgroundSection}>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`} />
                    </div>

                    <div className={styles.titleContainer}>
                        <div className={styles.descriptionTitleChampion}>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`} />
                            <div className={styles.groupTitle}>

                                <div className={styles.spanGroupTitle}>
                                    <span className={styles.spanDescriptionChampionTitle}>{champion.title}</span>
                                    <span className={styles.spanNameChampion}>{champion.name}</span>
                                </div>

                            </div>
                            <div className={styles.containerTypeBarDifficulty}>
                                <div>
                                    <img src='src/assets/ChampionDescription/Logo/Assassin.svg' />
                                    <span>FUNÇÃO</span>
                                    <span>{champion.tags[0]}</span>
                                </div>
                                <div>
                                    <div>barrinha</div>
                                    <span>DIFICULDADE</span>
                                    <span>MODERADO</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Outrora regente de um reino perdido, Viego morreu há mais de um milênio, quando uma tentativa de trazer sua esposa de volta à vida culminou em uma catástrofe mágica conhecida como "a Ruína". Transformado em um poderoso espectro morto-vivo, e sempre sendo torturado pela paixão obsessiva que sente por sua rainha morta há séculos, Viego agora é conhecido como o Rei Destruído. Hoje, ele controla os Tormentos enquanto assola Runeterra em busca de qualquer coisa que possa trazê-la de volta, destruindo tudo que estiver em seu caminho conforme a Névoa Negra emana de seu cruel coração partido.</p>
                        </div>
                    </div>
                </section>
            </div>}
        </>
    );
}

export default ChampionDescription

import styles from './ChampionDescription.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { TabTitle } from '../../utils/Title/Title'

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

    useEffect(() => {
        if(champion) {
            TabTitle(`${champion.name}, ${champion.title} - League of Legends`)
        }
    },[champion])   

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
                                    <img src={`/src/assets/ChampionDescription/Logo/${champion.tags[0]}.svg`} />
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
                            <p>{champion.lore}</p>
                        </div>
                    </div>
                </section>
            </div>}
        </>
    );
}

export default ChampionDescription

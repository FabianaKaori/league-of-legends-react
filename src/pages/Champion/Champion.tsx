import styles from './Champion.module.css'
import CardChampion from '../../components/CardChampion'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { any } from 'prop-types'

function Champion() {
    const [riotApi] = useState<string>("https://ddragon.leagueoflegends.com")
    const [apiVersion, setApiVersion] = useState<string>()
    const [champions, setChampion] = useState<string[]>([])

    useEffect(() => {
        axios.get(`${riotApi}/api/versions.json`)
            .then((response) => {
                setApiVersion(response.data[0])
            })
    }, [])

    useEffect(() => {
        if (apiVersion) {
            axios.get(`${riotApi}/cdn/${apiVersion}/data/pt_BR/champion.json`)
                .then((response) => {
                    setChampion(Object.keys(response.data.data))
                })
        }
    }, [apiVersion])

    return (
        <>
            <div className={styles.championPage}>
                <div className={styles.cardChampionTitleGroup}>
                    <span className={styles.escolhaSeu}>ESCOLHA SEU</span>
                    <h1 className={styles.champion}>CAMPEÃO</h1>
                    <p className={styles.cardChampionTitleText}>Com mais de 140 Campeões, você encontrará a combinação perfeita para seu estilo de jogo. Especialize-se em um estilo ou em todos.</p>
                </div>
                <div className={styles.searchBar}>barra de busca :B</div>
                <div className={styles.cardChampionContainer}>
                    {champions.length > 0 && champions.map((item) => {
                        return(<CardChampion name={item} />)
                    })}
                    
                </div>
            </div>
        </>
    )
}

export default Champion
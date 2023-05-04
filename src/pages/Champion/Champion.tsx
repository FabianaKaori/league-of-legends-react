import styles from './Champion.module.css'
import CardChampion from '../../components/CardChampion'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { any } from 'prop-types'
import { Link } from 'react-router-dom'

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
                <div className={styles.searchBar}>
                    <select className={styles.listNameSearch}>
                        <option value="all">BUSCAR</option>
                        <option value="aatrox">AATROX</option>
                        <option value="alistar">ALISTAR</option>
                        <option value="ahri">AHRI</option>
                        <option value="anivia">ANIVIA</option>
                        <option value="nami">NAMI</option>
                        <option value="lulu">LULU</option>
                        <option value="trindamare">TRINDAMARE</option>
                    </select>
                    <div className={styles.classGroup}>
                        <ul className={styles.classList}>
                            <li className={styles.itemList}>
                                TODOS
                            </li>
                            <li className={styles.itemList}>
                                <Link to="/teste">ASSASSINOS</Link>
                            </li>
                            <li className={styles.itemList}>
                                LUTADORES
                                </li>
                            <li className={styles.itemList}>
                                MAGOS
                                </li>
                            <li className={styles.itemList}>
                                ATIRADORES
                                </li>
                            <li className={styles.itemList}>
                                SUPORTES
                                </li>
                            <li className={styles.itemList}>
                                TANQUES
                            </li>
                        </ul>
                    </div>
                    <select className={styles.difficulty}>
                        <option value="all">TODAS AS DIFICULDADES</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    </div>
                    <div className={styles.cardChampionContainer}>
                        {champions.length > 0 && champions.map((item) => {
                            return (<CardChampion name={item} />)
                        })}

                    
                </div>
            </div>
        </>
    )
}

export default Champion
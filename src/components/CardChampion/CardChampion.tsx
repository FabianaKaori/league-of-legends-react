import styles from './CardChampion.module.css'
import PropTypes from 'prop-types';

function CardChampion({name}:{name: string}) {
    return (
        <>
            <div className={styles.cardChampionContainer}>
                <img className={styles.imgChampion} src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`} />
                <span className={styles.nameChampion}>{name}</span>
            </div>
        </>
    )
}

export default CardChampion
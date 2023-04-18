import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.containerFooter}>
            <video autoPlay muted loop className={styles.myVideo}>
                <source src="src\assets\Home\Video\Vi_Caitlyn_Urgot.mp4" type="video/mp4" />
            </video>

            <button className={styles.buttonVideo}>Jogue Agora</button>
        </div>




    );
}

export default Footer
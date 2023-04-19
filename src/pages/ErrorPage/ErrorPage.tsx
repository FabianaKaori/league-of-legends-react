import styles from './ErrorPage.module.css'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <>
            <div className={styles.erroContainer}>
                <img className={styles.imgHeimer} src='/src/pages/ErrorPage/heimer1.png' />
                <div className={styles.groupTextHeimer}>
                    <h1 className={styles.h1Heimer}>Ops, não encontramos esta página</h1>
                    <div className={styles.borderButton}>
                        <button className={styles.btnHeimer}><Link to="/">Início</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage
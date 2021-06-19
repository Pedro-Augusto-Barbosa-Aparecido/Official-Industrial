import styles from './styles.module.scss'

function AIHomePage() {
    return (
        <div className={styles.container}>
            <div className={styles.boxTitle}>
                <h1>ARTIFICIAL INTELLIGENCE</h1>
            </div>

            <div>
                <img 
                    width={900}
                    height={900}
                    src="/image/BgAI_HomePage.jpg"
                    // objectFit="scale-down"
                />
            </div>
        </div>
    )
}

export default AIHomePage
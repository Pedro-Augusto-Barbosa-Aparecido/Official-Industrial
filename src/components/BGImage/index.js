import styles from './styles.module.scss'

export default function BGImage (props) {
    return (
        <div>
            <img src="/image/Background.png" alt="Imagem de Fundo" className={styles.backgroundImage}/>
            <div className={styles.content}>
                { props.children }
            </div>
        </div>
    )
}
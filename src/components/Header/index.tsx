import styles from './styles.module.scss'

import BGImage from '../BGImage'

import { useState } from 'react'
import {
    useNavigate
} from 'react-router-dom'

function Header() {

    const [nameUser, setNameUser] = useState("Sing In")
    const navigate = useNavigate()

    return (
        <BGImage>
            <div className={styles.container}>
                
                <div className={styles.ImageLogo}>
                    <a onClick={() => navigate('/')} >
                        <img 
                            width={120}
                            height={120}
                            src="/image/Logo.png"
                            // objectFit='scale-down'
                        />
                    </a>
                </div>

                <div className={styles.center}>
                    <div className={styles.boxCenterTitle}>
                        <p>Industrial Monitoring System 4.0</p>
                    </div>
                    <div className={styles.content}>
                        <p>BEM-VINDO AO NOSSO SITE. NÓS UTILIZAMOS AS</p>
                        <p>TECNOLOGIAS MAIS MODERNAS PARA ATENDER AOS</p>
                        <p>EXIGENTES PADRÕES DA INDUSTRIA. CONTINUE LENDO PARA</p>
                        <p>SABER MAIS. CASO PRECISE, ENTRE EM CONTATO CONOSCO E</p>
                        <p>DESCUBRA O QUE MAIS PODEMOS OFERECER.</p>
                    </div>
                </div>

                <div className={styles.topHeader}>

                    <div className={styles.links}>
                        <a onClick={() => navigate('/')} className={styles.isLink}>Home</a>
                        <a href="#" className={styles.isLink}>IHM</a>
                        <a href="#" className={styles.isLink}>Banco de Dados</a>
                        <a href="#" className={styles.isLink}>Contato</a>
                    </div>

                    <p> { nameUser } </p>
                    <div className={styles.Image}>
                        <img 
                            width={75}
                            height={75}
                            src="/image/Login.png"
                            // objectFit='scale-down'
                        />
                    </div>
                </div>
            </div>
        </BGImage>
    )
}

export default Header
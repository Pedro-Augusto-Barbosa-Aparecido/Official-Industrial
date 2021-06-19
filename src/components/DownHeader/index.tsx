import {
    IoLogoInstagram,
    IoLogoFacebook,
    IoLogoLinkedin,
    IoLogoWhatsapp,
    IoLogoGithub
} from 'react-icons/io5'

import styles from './styles.module.scss'

function DownHeader() {
    return (
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <h1>INDUSTRIAL MONITORING SYSTEM 4.0</h1>
            </div>

            <img 
                width={150}
                height={150}
                src="/image/Logo-Rodape.png"
            />

            <div className={styles.icons}>
                <a href='#' >
                    <IoLogoFacebook className={styles.icon} />
                </a>
                <a href='#' >
                    <IoLogoInstagram className={styles.icon} />
                </a>
                <a href='#' >
                    <IoLogoLinkedin className={styles.icon} />
                </a>
                <a href='#' >
                    <IoLogoWhatsapp className={styles.icon} />
                </a>
                <a href='https://github.com/Pedro-Augusto-Barbosa-Aparecido' >
                    <IoLogoGithub className={styles.icon} />
                </a>

                <div className={styles.label}>
                    <p> | entre em contato também pelas redes sociais </p>
                </div>
            </div>

            <p>© 2020 IMS 4.0, Todos os direitos reservados - Pedro Augusto - Turma C - Engenharia de Software - 170 </p>
        </div>
    )
}

export default DownHeader
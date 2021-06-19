import styles from './styles.module.scss'

import {
    useNavigate
} from 'react-router-dom'

function UnderHeader() {

    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <div className={styles.Images}>
                <div className={styles.Image}>
                    <a href='#'>
                        <img
                            height={180}
                            width={180}
                            src="/image/IA_Icon.png"
                        />
                    </a>
                </div>
                <div className={styles.Image}>
                    <a onClick={() => navigate('/users')}>
                        <img
                            height={180}
                            width={180}
                            src="/image/IHM_Icone.png"
                        />
                    </a>
                </div>
                <div className={styles.Image}>
                    <a href="#">
                        <img
                            height={180}
                            width={180}
                            src="/image/DataBase_Icon.png"
                        />
                    </a>
                </div>
            </div>

            <p>O PROJETO VAI AJUDAR A MONITORAR SUA INDÚSTRIA, E COLOCAR TUDO EM UM SITE PARA MELHOR COMPREENSÃO DOS DADOS E</p>
            <p>CONTROLE DA MÁQUINA</p>
        </div>
    )
}

export default UnderHeader
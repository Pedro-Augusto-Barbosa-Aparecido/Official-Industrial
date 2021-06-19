import styles from './styles.module.scss'

function HomePage() {
    return (
        <div className={styles.container}>
            <div className={styles.firstContent}>

                <div className={styles.text}>
                    <h1>ESPECIFICAÇÃO SOBRE O PROJETO</h1>

                    <p>UM PROJETO DE AUTOMAÇÃO INDUSTRIAL QUE TEM COMO OBJETIVO MONITORAR TODO UM SISTEMA INDUSTRIAL. UTILIZANDO UMA AI, SERÁ POSSÍVEL TER</p>
                    <p>CONTROLE SOBRE TODOS OS PROCESSOS DE FUNCIONAMENTO DO SISTEMA INDUSTRIAL. INCLUINDO A REPOSIÇÃO DE PEÇAS E O AVISO DE COMPONENTES</p>
                    <p>POSSIVELMENTE DANIFICADOS, ALÉM DE AVISAR QUANDO NECESSÁRIO A MANUTENÇÃO MENSAL DE CADA EQUIPAMENTOS. APÓS UM CERTO PERÍODO DE</p>
                    <p>APRENDIZAGEM A AI NÃO NECESSITA MAIS DE SUPERVISÃO DE UM SUPERVISOR, SENDO CAPAZ DE IDENTIFICAR FALHA EM SEU PRÓPRIO SISTEMA. A AI NÃO</p>
                    <p>DEPENDE DE UM PROCESSO EXTERNO SENDO CAPAZ DE CALCULAR AS CHANCES DE FALHAS NA CRIAÇÃO DE PRODUTOS.</p>
                </div>

                <img 
                    width={800}
                    height={500}
                    src="/image/Assem2.jpg"
                />
            </div>

            <div className={styles.secondContent}>
                <img 
                    width={800}
                    height={500}
                    src="/image/IA_Layout.png"
                />

                <div className={styles.textContent}>
                    <h1>FUNCIONAMENTO DA INTELIGÊNCIA ARTIFICIAL</h1>

                    <p>UTILIZANDO VÁRIOS TIPOS DE SENSORES A AI PODE IDENTIFICAR TODAS AS CONDIÇÕES PARA A CRIAÇÃO EM SÉRIE DE UM MESMO PRODUTO SENDO CAPAZ DE</p>
                    <p>CONSERTAR FALHAS QUE POSSIVELMENTE PODEM DANIFICAR O PRODUTO, BUSCANDO SEMPRE MANTER O PRODUTO EM SEU MELHOR ESTADO. SEM UM</p>
                    <p>OPERADOR HUMANO A AI PODE AUTOMATICAMENTE SE NECESSÁRIO PEDIR A REPOSIÇÃO DE EQUIPAMENTOS INDUSTRIAS EM CASOS ONDE O EQUIPAMENTO</p>
                    <p>SOFRE MUITA INTERFERÊNCIA ELETROMAGNÉTICA DOS OUTROS EQUIPAMENTOS.</p>
                </div>

            </div>
        </div>
    )
}

export default HomePage
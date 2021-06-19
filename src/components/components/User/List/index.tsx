import React from "react";
import styles from './styles.module.scss'

import DownHeader from "../../../DownHeader";
import Header from "../../../Header";

import {
    FaRegFileExcel,
    GrUserNew
} from 'react-icons/all'

import {
    useNavigate
} from 'react-router-dom'

export default function ListUser() {

    const navigate = useNavigate()

    const users = [
        {
            "nome": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com"
        },
        {
            "nome": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com"
        },
        {
            "nome": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com"
        },
        {
            "nome": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com"
        },
        {
            "nome": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com"
        },
        {
            "nome": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com"
        },
        {
            "nome": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com"
        },
        {
            "nome": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com"
        },
        {
            "nome": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com"
        },
        {
            "nome": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com"
        },
    ]

    return (
        <>
            <Header />
            <div className={styles.containerTable}>
                <h1 className={styles.title} >Listagem de usuário</h1>

                <div className={styles.containerButton}>
                    <button className={styles.buttonExport}>
                        Export
                        <FaRegFileExcel />
                    </button>

                    <button className={styles.buttonCreate} onClick={() => navigate('/users/create')}>
                        Register
                        <GrUserNew />
                    </button>

                </div>

                <table className={styles.table}>
                        <tr className={styles.tableRowTitle}>
                            <td>User</td>
                            <td>Office</td>
                            <td>Email</td>
                        </tr>
                        {
                            users.map(user => {
                                return (
                                    <tr>
                                        <td className={styles.tableDataCell}>{user.nome}</td>
                                        <td className={styles.tableDataCell}>{user.office}</td>
                                        <td className={styles.tableDataCell}>{user.email}</td>
                                    </tr>
                                )
                            })
                        }
                </table>
            </div>
            <DownHeader />
        </>
    )
}

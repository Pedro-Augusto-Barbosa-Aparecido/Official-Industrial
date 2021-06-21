import React from "react";
import styles from './styles.module.scss'

import DownHeader from "../../../DownHeader";
import Header from "../../../Header";

import { FaRegFileExcel, FaRegEdit } from 'react-icons/fa';
import { BiMessageSquareDetail, BiArrowBack } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { GrUserNew } from "react-icons/gr";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export default function ListUser() {

    const navigate = useNavigate()

    const users = [
        {
            "id": 0,
            "nome": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com",
            "isAdmin": true
        },
        {
            "id": 1,
            "nome": "Peter",
            "office": "Especialista",
            "email": "pedro@gmail.com",
            "isAdmin": true
        },
        {
            "id": 2,
            "nome": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com",
            "isAdmin": false
        },
        {
            "id": 3,
            "nome": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com",
            "isAdmin": false
        },
        {
            "id": 4,
            "nome": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com",
            "isAdmin": true
        },
        {
            "id": 5,
            "nome": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com",
            "isAdmin": false
        },
    ];

    return (
        <>
            <Header />
            <div className={styles.containerTable}>
                <h1 className={styles.title} >Listagem de usuário</h1>

                <div className={styles.containerButton}>
                    <Button type="button" variant="info" className={styles.buttonBack} onClick={() => navigate('/')} >
                        <BiArrowBack />
                        Voltar
                    </Button>
                    <Button type="button" variant="info" className={styles.button} >
                        <FaRegFileExcel />
                        Export to XLS
                    </Button>
                    <Button type="button" variant="success" className={styles.button} onClick={() => navigate('create')} >
                        <GrUserNew />
                        Create User
                    </Button>
                </div>

                <table className={styles.table}>
                        <thead>
                            <tr className={styles.tableRowTitle}>
                                <td>User</td>
                                <td>Office</td>
                                <td>Email</td>
                                <td>Administrator</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => {
                                    return (
                                        <tr>
                                            <td className={styles.tableDataCell}>{user.nome}</td>
                                            <td className={styles.tableDataCell}>{user.office}</td>
                                            <td className={styles.tableDataCell}>{user.email}</td>
                                            <td className={styles.tableDataCell}>
                                                <Form.Check 
                                                    disabled
                                                    type="checkbox"
                                                    defaultChecked={user.isAdmin}
                                                />
                                            </td>
                                            <td className={styles.tableDataCell}>
                                                <Button variant="secondary" className={styles.btnAction} onClick={() => navigate(`detail/${user.id}`)} name="Detail" >
                                                    <BiMessageSquareDetail size={15} />
                                                </Button>
                                                <Button variant="warning" className={styles.btnAction} onClick={() => navigate(`edit/${user.id}`)} name="Edit" >
                                                    <FaRegEdit size={15} />
                                                </Button>
                                                <Button variant="danger" className={styles.btnAction} href="#" name="Delete" >
                                                    <AiOutlineCloseCircle size={15} />
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                </table>
            </div>
            <DownHeader />
        </>
    )
}

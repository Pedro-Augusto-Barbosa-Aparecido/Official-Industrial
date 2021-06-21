import React from "react";

import styles from './styles.module.scss';

import Header from "../../../Header";
import DownHeader from "../../../DownHeader";

import { useParams } from "react-router";
import { Button } from "react-bootstrap";
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { useNavigate } from "react-router";

import { DeleteEntent } from '../../../../utils/deleteFunctions';

export default function DetailUser () {

    const { pk } = useParams();
    const navigate = useNavigate();

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
    const user = users[parseInt(pk)];

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.containerTitle} >
                    <h1>Detail of {user.nome}</h1>
                </div>

                <div className={styles.containerDetail} >
                    <h5>Name: {user.nome}</h5>
                    <hr></hr>
                    <h5>E-mail: {user.email}</h5>
                    <hr></hr>
                    <h5>Office: {user.office}</h5>
                    <hr></hr>
                    <h5>Admin: {user.isAdmin ? "Administrator" : "User"}</h5>
                </div>

                <div className={styles.containerButtons} >
                    <Button type="button" variant="info" className={styles.buttonBack} onClick={() => navigate('/users')} >
                        <BiArrowBack />
                        Voltar
                    </Button>
                    <Button variant="danger" className={styles.button} onClick={() => DeleteEntent(user.nome)} >
                        <AiOutlineCloseCircle />
                        Delete
                    </Button>  
                    <Button variant="warning" className={styles.button} >
                        <FaRegEdit />
                        Edit
                    </Button>
                </div>
            </div>
            <DownHeader />
        </>
    )
}

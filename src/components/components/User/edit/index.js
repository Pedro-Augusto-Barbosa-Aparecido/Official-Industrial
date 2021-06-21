import React, { useRef } from 'react';

import styles from './styles.module.scss';

import Header from '../../../Header';
import DownHeader from '../../../DownHeader';
import InputText from '../components/input/inputText';

import { useParams } from 'react-router';
import { Form } from '@unform/web';
import { Button } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FiSave } from 'react-icons/fi';

export default function EditUser () {

    const users = [
        {
            "id": 0,
            "username": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com",
            "isAdmin": true
        },
        {
            "id": 1,
            "username": "Peter",
            "office": "Especialista",
            "email": "pedro@gmail.com",
            "isAdmin": true
        },
        {
            "id": 2,
            "username": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com",
            "isAdmin": false
        },
        {
            "id": 3,
            "username": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com",
            "isAdmin": false
        },
        {
            "id": 4,
            "username": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com",
            "isAdmin": true
        },
        {
            "id": 5,
            "username": "Pedro",
            "office": "Especialista",
            "email": "pedro@gmail.com",
            "isAdmin": false
        },
    ];

    const formRef = useRef(null);

    const { pk } = useParams();

    const initialData = users[parseInt(pk)]

    const handleSubmit = (data) => {
        const check = document.querySelector("#id_checkbox");
        if (check.checked) {
            data.checkbox = "checked";
        }

        console.log(data);

    };

    return (
        <>
            <Header />
            <div className={styles.container}>

                <div className={styles.containerTitle} >
                    <h1>Edit user: { initialData.username } </h1>
                </div>

                <Form onSubmit={handleSubmit} ref={formRef} className={styles.containerInput} initialData={initialData} >
                    <InputText
                        placehoder="Enter with username..." 
                        name="username" 
                        type="text" 
                        id="id_username" 
                        styleInput={styles.input}
                        textLabel="Username: "
                        styleLabel={styles.label} 
                    />
                    <InputText
                        placehoder="Enter with e-mail..." 
                        name="email" 
                        type="email" 
                        id="id_email" 
                        styleInput={styles.input} 
                        textLabel="E-mail: "
                        styleLabel={styles.label}
                    />
                    <InputText
                        placehoder="Put your password..." 
                        name="password" 
                        type="password" 
                        id="id_password" 
                        styleInput={styles.input} 
                        textLabel="Password: "
                        styleLabel={styles.label}
                    />
                    <InputText
                        placehoder="Put the office..." 
                        name="office" 
                        type="text" 
                        id="id_office" 
                        styleInput={styles.input} 
                        textLabel="Office: "
                        styleLabel={styles.label}
                    />
                    <InputText
                        placehoder="" 
                        name="checkbox" 
                        type="checkbox" 
                        id="id_checkbox" 
                        styleInput={styles.check} 
                        textLabel="Check if user is admin..."
                        styleLabel={styles.labelCheck}
                    />

                    <Button type="button" variant="info" className={styles.back} href="/users" >
                        <IoMdArrowRoundBack />
                    </Button>
                    <Button type="submit" variant="success" className={styles.submit} >
                        <FiSave />
                        Save
                    </Button>
                </Form>
            </div>
            <DownHeader />
        </>
    )

}

import React, { useRef } from "react";

import styles from './styles.module.scss'

import Header from "../../../Header";
import DownHeader from "../../../DownHeader";

import { Button } from "react-bootstrap";

import { GrUserNew } from 'react-icons/gr';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Form } from '@unform/web';

import InputText from '../components/Forms/inputText';

export default function CreateUser() {
    const formReference = useRef(null);

    const handleSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <>
            <Header />
            <div className={styles.containerCreate}>

                <div className={styles.containerTitle}>
                    <h1>Registrar novo usuário</h1>
                </div>

                <Form onSubmit={handleSubmit} ref={formReference} className={styles.containerInput} >
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
                        placehoder="Confirm your password..." 
                        name="comfirmatioPassword" 
                        type="password" 
                        id="id_confirmation_password" 
                        styleInput={styles.input} 
                        textLabel="Confirm your password: "
                        styleLabel={styles.label}
                    />

                    <Button type="button" variant="info" className={styles.back} href="/users" >
                        <IoMdArrowRoundBack />
                    </Button>
                    <Button type="submit" variant="warning" className={styles.submit} >
                        <GrUserNew />
                        Criar
                    </Button>
                </Form>

            </div>
            <DownHeader />
        </>
    )
}

import React from "react";
import { useParams } from "react-router";
import { DataUserForm } from "../../types/typesForms";


export default function Debug() {
    const { data } = useParams()

    const user = data

    return (
        <p>
            {
            
            }
        </p>
    )

}
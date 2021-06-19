import React, { useEffect, useRef } from "react";
import { useField } from '@unform/core';

export default function InputText({ styleInput, type, name, id, placehoder, styleLabel={}, textLabel="", ...rest }) {
    
    const inputReference = useRef(null);
    const { fieldName, registerField, error } = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputReference,
            getValue: ref => {
                return ref.current.value
            },
            setValue: (ref, value) => {
                ref.current.value = value
            },
            clearValue: ref => {
                ref.current.value = ''
            },
        })
    }, [fieldName, registerField]);
    
    return (
        <div>
            {
                textLabel ? 
                <label className={ styleLabel ? styleLabel : "" }>
                    { textLabel }
                </label>
                :
                <></>
            }
            <input 
                className={styleInput} 
                placeholder={placehoder}
                type={type} 
                name={name} 
                id={id} 
                ref={inputReference} 
            />
        </div>
    )
}
import React, { useEffect, useRef } from "react";
import { useField } from '@unform/core';

export default function InputText({ styleInput, type, name, id, placehoder, styleLabel={}, textLabel="", ...rest }) {
    
    const inputReference = useRef(null);
    const { fieldName, registerField, error, defaultValue } = useField(name)

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
                type !== "checkbox" ? textLabel ? 
                <>
                    <label className={ styleLabel ? styleLabel : "" }>
                        { textLabel }
                    </label>
                    <input 
                        className={styleInput} 
                        placeholder={placehoder}
                        type={type} 
                        name={name} 
                        id={id} 
                        ref={inputReference} 
                        defaultValue={defaultValue}
                        {...rest}
                    />
                </>
                :
                <>
                    <input 
                        className={styleInput} 
                        placeholder={placehoder}
                        type={type} 
                        name={name} 
                        id={id} 
                        ref={inputReference} 
                        defaultValue={defaultValue}
                        {...rest}
                    />
                </>
                :
                <>
                    <input 
                        className={styleInput} 
                        placeholder={placehoder}
                        type={type} 
                        name={name} 
                        id={id} 
                        ref={inputReference} 
                        checked={defaultValue}
                        {...rest}
                    />
                    <label className={ styleLabel ? styleLabel : "" }>
                        { textLabel }
                    </label>
                </>
            }
            
        </div>
    )
}
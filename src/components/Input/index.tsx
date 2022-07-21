import React, { FC, InputHTMLAttributes } from 'react'
import S from "./index.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

const Input : FC<InputProps> = ({...props}) => {
    return (
        <input className={S.input} {...props} />
    );
}

export default Input;
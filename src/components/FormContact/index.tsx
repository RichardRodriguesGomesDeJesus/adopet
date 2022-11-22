import  Style  from './FormContact.module.scss'
import Styles from 'styles/theme.module.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function FormContact (){
    const navigate = useNavigate()
    const submit = (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault()
        navigate('/')
    }
    return(
        <form className={Style.form} onSubmit={submit}>
            <label htmlFor="" className={Style.form__label} >Nome</label>
            <input type="text" className={Style.form__input} placeholder='Insira seu nome completo' required />
            <label htmlFor="" className={Style.form__label} >Telefone</label>
            <input type="tel"  className={Style.form__input} placeholder='Insira seu telefone e/ou whatsapp' required />
            <label htmlFor="" className={Style.form__label} >Nome do animal</label>
            <input type="text" className={Style.form__input} placeholder='Por qual animal você se interessou?' required />
            <label htmlFor="" className={Style.form__label} >Mensagem</label>
            <textarea name="" id="" cols={30} rows={10} className={Style.form__textArea} placeholder='Escreva sua mensagem.' required ></textarea>
            <button type="submit" className={`${Styles.btn} ${Style.form__btn}`} >Enviar</button>
        </form>
    )
}
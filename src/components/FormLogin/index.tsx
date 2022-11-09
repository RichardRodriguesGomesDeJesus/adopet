import  Style  from './FormLogin.module.scss'
import { createElement, useState } from 'react'
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import { Link, useNavigate } from 'react-router-dom'
import Styles from 'styles/theme.module.scss'


export default function FormLogin (){
    const [email, setEmail]=useState('')
    const [password, setPassword]= useState('')
    const [iconPassword, setIconPassword]= useState(eyeOff)
    const [typePassword, setTypePassword]= useState('password')
    const navigate = useNavigate()
    const FormSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        fetch('http://localhost:4000/accounts')
            .then((response) => response.json())
            .then((result) => {
                const listEmails = result.map( (element: any) => element.email)
                const listPasswords = result.map( (element: any) => element.password)
                if (listEmails.includes(email) && listPasswords.includes(password)) {
                    navigate('/Cadastro')
                } else {
                    const form = document.querySelector('form')
                    form?.classList.add(Style.active)
                }
            })
    }
    const handleToggle =()=> {
        if (typePassword === 'password') {
            setIconPassword(eye)
            setTypePassword('text')
        } else{
            setIconPassword(eyeOff)
            setTypePassword('password')
        }
    }
    return(
        <form className={Style.form} onSubmit={FormSubmit} >
            <label className={Style.form__label} htmlFor={Style.email}>Email</label>
            <input className={Style.form__input} type="email" data-js='email' onChange={(event)=>{setEmail(event.target.value)}} id={Style.email} value={email} required placeholder='Insira seu email' />
            <p className={Style.mse__validity}>Email ou senha invalidos</p>
            <label className={Style.form__label} htmlFor="password">Senha</label>
            <p className={Style.mse__validity}>Email ou senha invalidos</p>
            <input className={Style.form__input} type={typePassword} data-js='password' onChange={(event)=>{setPassword(event.target.value)}} id='password' value={password} required placeholder='Insira sua senha' /><Icon className={Style.visibility} icon={iconPassword} size={20} onClick={handleToggle} />
            <Link className={Style.link} to={'/Login'}>Esqueci minha senha.</Link>
            <button className={`${Styles.btn} ${Style.btn}`} type="submit">Entrar</button>
        </form>
    )
}
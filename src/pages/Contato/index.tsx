import { ReactNode, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Style from './Contato.module.scss'
import Styles from 'styles/theme.module.scss'
import FormContact from 'components/FormContact'

export default function Contato() {
    const body = document.querySelector('body')
    const main = document.querySelector('main')
    body?.style.setProperty('--body-background-inicial', '#FFFFFF')
    const navigate = useNavigate()
    const { state } = useLocation()
    const dados = JSON.parse(localStorage.getItem('users')|| '[]') 
    const list  = dados.map((element: any)=> element.email)
    const user = list.includes(state)
    const id = list.findIndex((e: string)=>e == state)
    return(
        <main>
            {user ? (<img src={dados[id].photo} className={Styles.userPhoto} alt= 'foto de perfil' />): useEffect(()=> navigate('/Login'),)  as ReactNode }
            <section className={Style.presentation} >
                <p className={Style.presentation__text} >Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.</p>
            </section>
            <section className={Style.contact}>
                <FormContact/>
            </section>
        </main>
    )
}
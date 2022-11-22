import Style from './Home.module.scss'
import Styles from 'styles/theme.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { ReactNode, useEffect } from 'react'
import Itens from 'components/Itens'

export default function Home() {
    const body = document.querySelector('body')
    body?.style.setProperty('--body-background-inicial', '#FFFFFF')
    const navigate = useNavigate()
    const { state } = useLocation()
    const dados = JSON.parse(localStorage.getItem('users')|| '[]') 
    const list  = dados.map((element: any)=> element.email)
    const user = list.includes(state)
    const id = list.findIndex((e: string)=>e == state)
            
        
    
    return(
        <main>
            <section className={Style.presentation} >
                <p className={Style.presentation__text}>Olá! Veja os amigos disponíveis para adoção!</p>
            </section>
            <section>
                <Itens/>
            </section>
            {user ? (<img src={dados[id].photo} className={Styles.userPhoto} alt= 'foto de perfil' />): useEffect(()=> navigate('/Login'),)  as ReactNode }
        </main>
    )
}
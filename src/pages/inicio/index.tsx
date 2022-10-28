import  Style  from './Inicio.module.scss'
import Styles from 'styles/theme.module.scss'
import {ReactComponent as Logo } from 'assets/Logo.svg'
import {ReactComponent as Ilustracao } from 'assets/ilustracao.svg'
import {ReactComponent as BackgroundSvg } from 'assets/Forma_2.svg'
import { Link } from 'react-router-dom'

export default function Inicio () {
    return(
        <main className={Style.main}>
            <section className={Style.welcome}>
                <Logo className={Style.welcome__logo} />
                <h2  className={Style.welcome__titulo} >Boas-vindas!</h2>
                <p className={Style.welcome__description} >Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
                <p className={Style.welcome__descriptionAlternative}>Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje?Vem com a gente!</p>
            </section>
            <section>
                <ul className={Style.links}>
                    <Link className={`${Style.links__btn} ${Styles.btn}`} to='/Login'>Já tenho conta</Link>
                    <Link className={`${Style.links__btn} ${Styles.btn}`} to='/Cadastro'>Quero me cadastrar</Link>
                    <BackgroundSvg className={Style.backgroundSvg}/>
                </ul>
                <Ilustracao className={Style.links__svg}/>
            </section>
        </main>
    )
}
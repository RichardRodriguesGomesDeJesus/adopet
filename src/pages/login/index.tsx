import Style from './Login.module.scss'
import {ReactComponent as PawsSvg } from 'assets/Patas.svg'
import {ReactComponent as Logo } from 'assets/Logo_azul.svg'
import FormLogin from 'components/FormLogin'
export default function Login (){
    const body = document.querySelector('body')
    body?.style.setProperty('--body-background-inicial', '#FFFFFF')
    return(
        <main>
            <section className={Style.presentation}>
                <Logo className={Style.logo}/>
                <div className={Style.presentation__text}>
                    <p className={Style.presentation__text___description}>Já tem conta? Faça seu login:</p>
                </div>
            </section>
            <section>
                <FormLogin/>
                <PawsSvg className={Style.PawsSvg} />
            </section>
        </main>
    )
}
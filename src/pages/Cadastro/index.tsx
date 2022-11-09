import Style from './Cadastro.module.scss'
import {ReactComponent as BackgroundSvg } from 'assets/Forma_2.svg'
import {ReactComponent as BackgroundMobileSvg } from 'assets/Forma 4.svg'
import {ReactComponent as PawsSvg } from 'assets/Patas.svg'
import {ReactComponent as Logo } from 'assets/Logo_azul.svg'
import FormRegistration from 'components/FormRegistration'

export default function Cadastro(){
    const body = document.querySelector('body')
    body?.style.setProperty('--body-background-inicial', '#FFFFFF')
    return(
        <main>
            <section className={Style.presentation}>
                <Logo className={Style.logo}/>
                <div className={Style.presentation__text}>
                    <strong className={Style.presentation__text___strong}>Ainda não tem cadastro?</strong>
                    <p className={Style.presentation__text___description}>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
                </div>
            </section>
            <section>
                <FormRegistration/>
                <BackgroundMobileSvg className={Style.backgroundMobileSvg}/>
                <BackgroundSvg className={Style.backgroundSvg}/>
                <PawsSvg className={Style.PawsSvg}/>
            </section>
            
        </main>
    )
}
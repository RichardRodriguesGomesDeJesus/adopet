import FormUser from 'components/FormUser'
import Style from './Perfil.module.scss'
export default function Perfil (){
    const body = document.querySelector('body')
    body?.style.setProperty('--body-background-inicial', '#FFFFFF')
    return(
        <main>
            <div className={Style.userPhoto}></div>
            <section className={Style.presentation}>
                <div className={Style.presentation__description}>
                    <p>Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.</p>
                </div>
            </section>
            <section className={Style.sectionForm} >
                <FormUser/>
            </section>
        </main>
    )
}
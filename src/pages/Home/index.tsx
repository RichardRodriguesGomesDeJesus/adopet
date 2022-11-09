import Style from './Home.module.scss'
import Styles from 'styles/theme.module.scss'
export default function Home() {
    const body = document.querySelector('body')
    body?.style.setProperty('--body-background-inicial', '#FFFFFF')
    return(
        <main>
            <div className={Styles.userPhoto}></div>
            <section>
                
            </section>
        </main>
    )
}
import Menu from 'components/Menu'
import {ReactComponent as Logo} from 'assets/Logo.svg'
import {ReactComponent as Background} from 'assets/Forma_1.svg'
import {ReactComponent as BackgroundMobile} from 'assets/Forma_1_mobile.svg'
import Style from 'components/DefaultPage/DefaultPage.module.scss'
import { Outlet } from 'react-router-dom'


export default function DefaultPage (props: any ){
    return(
        <>
            <header className={Style.header}>
                <Logo className={Style.header__logo}/>
                <Menu/>
            </header>
            <div>
                <Outlet />
            </div>
            <BackgroundMobile className={Style.header__backgroundMobile}/>
            <Background className={Style.header__background}/>
            <footer className={Style.footer}><p className={Style.footer__description}>2022 - Desenvolvido por Alura.</p></footer>
        </>
    )
} 
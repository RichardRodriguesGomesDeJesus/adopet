import Menu from 'components/Menu'
import {ReactComponent as Logo} from 'assets/Logo.svg'
import {ReactComponent as Background} from 'assets/Forma_1_mobile.svg'
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
            <Background className={Style.header__background}/>
        </>
    )
} 
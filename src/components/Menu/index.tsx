
import {ReactComponent as Home} from 'assets/Casa.svg'
import {ReactComponent as Contato } from 'assets/Mensagens.svg'

import { Link } from 'react-router-dom'

import  Style  from 'components/Menu/Menu.module.scss'
export default function Menu (){
    return(
        <nav className={Style.header__navigation} >
            <ul className={Style.header__navigation___list}>
                <li ><Link to='/' ><Home/></Link></li>
                <li ><Link to='#'><Contato/></Link></li>
            </ul>
        </nav>
    )
}
import Style from './Iten.module.scss'
import {ReactComponent as Communication } from 'assets/ícone_mensagem.svg'
import { useLocation, useNavigate } from 'react-router-dom'
interface Props{
    img: string
    name: string,
    ages: string,
    size: string,
    description: string,
    localization: string,
}
export default function Iten(Props: Props) {
    const navigate = useNavigate()
    const {state} = useLocation()
    const link = () =>{
        navigate('/Contato',{state : state})
    }
    return(
        <div className={Style.card}>
            <img className={Style.card__img} src={`assets/pets/${Props.img}`}/>
            <div className={Style.card__info}>
                <h2 className={Style.card__name}> {Props.name}</h2>
                <p className={Style.card__description}> {Props.ages}</p>
                <p className={Style.card__description}> {Props.size}</p>
                <p className={Style.card__description}> {Props.description}</p>
                <p className={Style.card__localization}>{Props.localization}</p>
                <div onClick={link} className={Style.card__communication}><Communication className={Style.iconCommunication}/><p className={Style.card__link}>Falar com responsavel</p></div>
            </div>
        </div>)
}
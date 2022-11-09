import  Style  from './FormRegistration.module.scss'
import Styles from 'styles/theme.module.scss'
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function FormRegistration(){
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]= useState('')
    const[confirmPassword, setConfirmPassword] = useState('')

    const [typePassword, setTypePassword]= useState('password')
    const [iconPassword, setIconPassword]= useState(eyeOff)
    const [typeConfirm, setTypeConfirm]= useState('password')
    const [iconConfirm, setIconConfirm]= useState(eyeOff)
    const navigate = useNavigate()
    const handleToggle =()=> {
        if (typePassword === 'password') {
            setIconPassword(eye)
            setTypePassword('text')
        } else{
            setIconPassword(eyeOff)
            setTypePassword('password')
        }
    }
    const handleToggleConfirm =()=> {
        if (typeConfirm === 'password') {
            setIconConfirm(eye)
            setTypeConfirm('text')
        } else{
            setIconConfirm(eyeOff)
            setTypeConfirm('password')
        }
    }
    //json-server -p 4000 db.json
    const formSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        try {
            fetch('http://localhost:4000/accounts',{
                method: 'POST',
                headers:{
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            })
                .then(()=>{
                    navigate('/Perfil')
                })
        } catch (error){
            console.log(error)
        }
    }
    const emailValidity =(event: React.FocusEvent<HTMLInputElement>)=>{
        event.preventDefault()
        fetch('http://localhost:4000/accounts')
            .then((response) => response.json())
            .then((result) => {
                const listEmail = result.map( (element: any) => element.email)
                return listEmail
            })
            .then(list =>{
                if (list.includes(email)) {
                    event.target.setCustomValidity('Este endereço de email já foi cadastrado, use outro')
                    event.target.reportValidity()
                    console.log('a')
                    return false
                } else {
                    event.target.setCustomValidity('')
                    return true
                }
            })
    }
    const emailConfirmValidity = (event: React.FocusEvent<HTMLInputElement> )=>{
        if (password != confirmPassword) {
            event.target.setCustomValidity('As senhas devem ser iguais.')
            event.target.reportValidity()
            return false
        } else {
            event.target.setCustomValidity('')
            return true
        }
    }
    return(
        <form className={Style.form} onSubmit={formSubmit} >
            <label className={Style.form__label} htmlFor='name'>Nome</label>
            <input className={Style.form__input} type='text' id={Style.name} required placeholder='Digite seu nome completo' data-js='name' autoComplete='name' onChange={(event)=>{setName(event.target.value)}} value={name} />
            <label className={Style.form__label} htmlFor='email'>Email</label>
            <input className={Style.form__input} type='email' id={Style.email} required placeholder='Escolha seu melhor email' data-js='email' autoComplete='email' onBlur={emailValidity} onChange={(event)=>{setEmail(event.target.value)}} value={email}/>
            <label className={Style.form__label} htmlFor='password'>Senha</label>
            <input className={Style.form__input} type={typePassword} id='password' required placeholder='Crie uma senha'title="A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos" pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$' data-js='password'  autoComplete='new-password'  onChange={(event)=>{setPassword(event.target.value)}} value={password}/>
            <Icon onClick={handleToggle} className={Style.password__visibility} id={Style.newPassword__visibility} icon={iconPassword} size={20} />
            <label className={Style.form__label} htmlFor='confirm-password'>Confirmar sua senha</label>
            <input className={Style.form__input} type={typeConfirm}  id='confirmPassword' title="A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos" pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$'  required placeholder='Repita a senha criada acima'  data-js='confirmPassword' autoComplete='new-password'onBlur={emailConfirmValidity}  onChange={(event)=>{setConfirmPassword(event.target.value)}} value={confirmPassword}/>
            <Icon onClick={handleToggleConfirm} className={Style.password__visibility} id={Style.confirmPassword__visibility}  icon={iconConfirm} size={20} />
            <button className={`${Styles.btn} ${Style.form__btn}`} type='submit'>Cadastrar</button>
        </form>
    )
}


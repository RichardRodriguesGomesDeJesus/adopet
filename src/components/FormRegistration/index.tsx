import  Style  from './FormRegistration.module.scss'
import Styles from 'styles/theme.module.scss'
export default function FormRegistration(){
    return(
        <form action="" method="POST" className={Style.form}>
            <label className={Style.form__label} htmlFor="name">Nome</label>
            <input className={Style.form__input} type="text" id={Style.name} required placeholder="Digite seu nome completo" autoComplete='name'/>
            <label className={Style.form__label} htmlFor="email">Email</label>
            <input className={Style.form__input} type="email" id={Style.email} required placeholder="Escolha seu melhor email" autoComplete="email"/>
            <label className={Style.form__label} htmlFor="password">Senha</label>
            <input className={Style.form__input} type="password" id="password" required placeholder="Crie uma senha"  autoComplete="new-password"/><div className={Style.password__visibility} id={Style.newPassword__visibility} ></div>
            <label className={Style.form__label} htmlFor="confirm-password">Confirmar sua senha</label>
            <input className={Style.form__input} type="password"  id="confirm-password" required placeholder="Repita a senha criada acima"  autoComplete="new-password"/><div className={Style.password__visibility} id={Style.confirmPassword__visibility} ></div>
            <button className={`${Styles.btn} ${Style.form__btn}`} type="submit">Cadastrar</button>
        </form>
    )
}
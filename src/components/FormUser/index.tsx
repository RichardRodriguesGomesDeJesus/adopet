import { useEffect, useRef, useState } from 'react'
import  Style  from './FormUser.module.scss'
import Styles from 'styles/theme.module.scss'
import { useNavigate } from 'react-router-dom'
export default function FormUser () {
    const [fileImg, setFileImg]= useState<File| null>()
    const [previewImg, setPreviewImg]= useState<string | null>()
    const fileInputRef = useRef<HTMLInputElement>()
    const navigate = useNavigate()
    useEffect(()=>{
        if (fileImg) {
            const reader = new FileReader()
            reader.onload= ()=>{
                setPreviewImg(reader.result as string)
            }
            reader.readAsDataURL(fileImg)
        } else {
            setPreviewImg(null)
        }
    },[fileImg])
    const formSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        navigate('/')
    }
    return(
        <form className={Style.form} onSubmit={formSubmit}>
            <h2 className={Style.form__title}>Perfil</h2>
            <label htmlFor='' className={Style.form__label}>Foto</label>
            {previewImg ? (<img className={Style.form__img} src={previewImg as string}  />): (
                <>
                    <button onClick={(event)=>{
                        event.preventDefault()
                        fileInputRef.current?.click()
                    }} className={Style.form__btnFile}></button>
                    <p className={Style.form__text}>Clique na foto para editar</p>
                </>
            )}
            <input type='file' accept='image/*' className={Style.form__inputFile} ref={fileInputRef as React.LegacyRef<HTMLInputElement> | undefined} onChange={(event)=>{
                
                const file = event.target.files?.[0]
                if (file && file.type.substring(0, 5) === 'image') {
                    setFileImg(file)
                } else {
                    setFileImg(null)
                }
            }} />
            <label htmlFor='' className={Style.form__label}>Nome</label>
            <input type='text' className={Style.form__input} placeholder='Joana Magalhães' required />
            <label htmlFor=''  className={Style.form__label}>Telefone</label>
            <input type='tel' className={Style.form__input} placeholder='55 11 XXXXXXXXX' required />
            <label htmlFor='' className={Style.form__label}>Cidade</label>
            <input type='text' className={Style.form__input} placeholder='São Paulo' required />
            <label htmlFor='' className={Style.form__label}>Sobre</label>
            <textarea name=''  className={Style.form__textArea} id='' cols={30} rows={10} placeholder='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.'></textarea>
            <button type="submit" className={`${Styles.btn} ${Style.form__btn}`}>Submit</button>
        </form>
    )
}
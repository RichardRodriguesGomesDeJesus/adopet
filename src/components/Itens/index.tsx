import IPets from 'Interfaces/IPets'
import Style from './Itens.module.scss'
import { useEffect, useState } from 'react'
import Iten from './Iten'

export default function Itens() {
    interface Props{
        name: string,
        description: string
        localization: string,
        key: number
    }
    const [pets, setPets] = useState<IPets[]>([]) 
    useEffect(()=>{
        fetch('https://api-json-server-flame.vercel.app/pets')
            .then((response)=>response.json())
            .then((list)=>{
                setPets(list)
            })
    },[])
    return(
        <div className={Style.list} >
            {pets.map((pet)=><Iten key={pet.id} name={pet.name} description={pet.description} localization={pet.localization} img={pet.img} ages={pet.ages} size={pet.size} />)}
        </div>
    )
}
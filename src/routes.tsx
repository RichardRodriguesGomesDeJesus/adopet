import DefaultPage from 'components/DefaultPage'
import Cadastro from 'pages/Cadastro'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from 'pages/inicio'
import Perfil from 'pages/Perfil'
import Login from 'pages/login'
import Home from 'pages/Home'
import Contato from 'pages/Contato'

export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<DefaultPage/>} >
                    <Route index  element={<Inicio/>} />
                    <Route path='Cadastro'element={<Cadastro/>} />
                    <Route path='Perfil' element={<Perfil/>} />
                    <Route path='Login' element={<Login/>}/>
                    <Route path='Home' element={<Home/>} />
                    <Route path='Contato' element={<Contato/>}  />
                </Route>
            </Routes>
        </Router>

    )
}


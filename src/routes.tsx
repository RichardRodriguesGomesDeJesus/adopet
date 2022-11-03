import DefaultPage from 'components/DefaultPage'
import Cadastro from 'pages/Cadastro'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from 'pages/Inicio'

export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<DefaultPage/>} >
                    <Route index  element={<Inicio/>} />
                    <Route path='Cadastro'element={<Cadastro/>} />
                </Route>
            </Routes>
        </Router>

    )
}


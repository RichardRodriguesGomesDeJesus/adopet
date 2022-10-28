import DefaultPage from 'components/DefaultPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'

export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<DefaultPage/>} >
                    <Route index  element={<Inicio/>} />
                </Route>
            </Routes>
        </Router>

    )
}


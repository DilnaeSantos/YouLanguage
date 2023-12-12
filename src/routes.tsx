import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import VideoCall from './pages/VideoCall'
import CadastroTeacher from './pages/CadastroTeacher'
import CadastroStudent from './pages/CadastroStudent'


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro!" element={<CadastroTeacher />} />
        <Route path="/Cadastro" element={<CadastroStudent />} />
        <Route path="/VideoCall" element={<VideoCall />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import { AuthProvider } from './Components/utils/Auth'
import Dashboard from './Components/Dashboard'
import RequiredAuth from './Components/utils/RequiredAuth'
import ClientTrail from './Components/ClientTrail'
import Account from './Components/Account'
import Location from './Components/Location'
import Building from './Components/Buildings'
import Coverage from './Components/Coverages'
import Offerings from './Components/Offerings'
import { ClientProvider } from './Components/utils/ClientContext';


const App = () => (
  <BrowserRouter>
    <AuthProvider>
    <ClientProvider> {/* Wrap your routes with ClientProvider */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route path='/Client' element={<RequiredAuth><ClientTrail /></RequiredAuth>}>
        <Route index element={<Account/>} />
          <Route path="account" element={<Account/>} />
          <Route path="location" element={<Location />} />
          <Route path="building" element={<Building />} />
          <Route path="coverage" element={<Coverage />} />
          <Route path="offerings" element={<Offerings />} />
        </Route>

        <Route path='/Dashboard' element={<RequiredAuth><Dashboard /></RequiredAuth>} />

      </Routes>
      </ClientProvider>
    </AuthProvider>
  </BrowserRouter>

);

export default App

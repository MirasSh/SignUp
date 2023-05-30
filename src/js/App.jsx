import { useState } from 'react'
import AuthProvider from '../contexts/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignLanguageForm from '../components/SignLanguageForm'
import SignLanguageLogin from '../components/SignLanguageLogin'
import Welcome from '../components/Welcome' 
import MainWindom from '../components/MainWindom'
import Greeting from '../components/Greeting'
import '../css/bootstrap.css'


function App() {
  const [lang, setLang] = useState(0)

  return (
    <div className="App">
       <div className="w-100">
            <Router>
            <AuthProvider>
              <Routes>
                <Route path='/' Component={Welcome} />
                <Route path='/map' Component={MainWindom} />
                <Route path='/lesson1' Component={Greeting} />
                <Route path='/Registr' Component={SignLanguageForm} />
                <Route exact path='/login' Component={SignLanguageLogin} />
              </Routes>
            </AuthProvider>
            </Router>
          </div>
    </div>
  )
}

export default App

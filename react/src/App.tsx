import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home'
import {Routes, Route} from "react-router-dom";
import ConferenciaPage from './pages/conferencia/ConferenciaPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/conferencia" element={<ConferenciaPage />}></Route>
        <Route path="/conferencia" element={<ConferenciaPage />}></Route>
      </Routes>
    </>
  )
}

export default App

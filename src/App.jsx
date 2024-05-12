import { BrowserRouter, Route, Routes } from 'react-router-dom'

import  Home  from './Home.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

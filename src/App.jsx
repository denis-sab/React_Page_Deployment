import { Routes, Route } from "react-router-dom"
import './App.css'
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import Users from "./Pages/Users"

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
      </Route>
    </Routes>
   
    </>
  )
}

export default App

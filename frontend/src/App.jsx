import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'


const routes = (
  <Router>
    <Routes>
      <Route path='/dashboard' element={<Home></Home>}></Route>
      <Route path='/' element={<Signup></Signup>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
  </Router>
)




export const App = () => {
  return (
    <div>{routes}</div>
  )
}

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import InitialPage from './components/InitialPage'
import FindCep from './components/FindCep'
import FindAdress from './components/FindAdress'
import Result from './components/Result'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<InitialPage />} />
        <Route exact path='/findCep' element={<FindCep />} />
        <Route exact path='/findAdress' element={<FindAdress />} />
        <Route exact path='/result/:cep' element={<Result/>} />
      </Routes>
    </Router>
  )
}

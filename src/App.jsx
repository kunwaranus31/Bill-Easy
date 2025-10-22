import { Box } from '@mui/material'
import React from 'react'
import { ConstructionFinancialManagement, Footer, Header, Home } from './pages'
import { FeaturesMegaMenu } from './component'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Box>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/construction-financial-management" element={<ConstructionFinancialManagement/>} />
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App

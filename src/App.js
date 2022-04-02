import React from 'react'
import Navbar from './components/navbar/Navbar'
import styled from '@emotion/styled'
import Sidebar from './components/sidebar/Sidebar'

// STYLE
const AppContainer = styled.div``

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Sidebar />
    </AppContainer>
  )
}

export default App

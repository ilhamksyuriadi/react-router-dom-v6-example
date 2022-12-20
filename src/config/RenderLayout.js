import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const RenderLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default RenderLayout
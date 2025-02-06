import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Aside from '../Aside/Aside'
import Main from '../Main/Main'
import Profile from '../Profile/Profile'
import Footer from '../Footer/Footer'

function App() {

  return (
    <>
      <div className="page">
        <Aside></Aside>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App

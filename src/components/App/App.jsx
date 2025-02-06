import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Aside from '../Aside/Aside'
import Main from '../Main/Main'
import Dashboard from '../Dashboard/Dashboard'
import Profile from '../Profile/Profile'
import Footer from '../Footer/Footer'
import Settings from '../Settings/Settings'
import PageNotFound from '../PageNotFound/PageNotFound'

function App() {

  return (
    <>
      <div className="page">
        <Aside></Aside>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/my-task" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App

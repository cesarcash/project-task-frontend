import { useState } from 'react'

import Aside from '../Aside/Aside'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

function App() {

  return (
    <>
      <div className="page">
        <Aside></Aside>
        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App

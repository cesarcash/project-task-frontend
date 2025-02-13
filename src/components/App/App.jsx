import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Main from '../Main/Main'
import Dashboard from '../Dashboard/Dashboard'
import Profile from '../Profile/Profile'
import Settings from '../Settings/Settings'
import PageNotFound from '../PageNotFound/PageNotFound'
import MotivationalQuotes from '../MotivationalQuotes/MotivationalQuotes'
import Preloader from '../Preloader/Preloader'
import Signup from '../Signup/Signup'
import Signin from '../Signin/Signin'
import HomeTemplate from '../HomeTemplate/HomeTemplate'

function App() {

  const [isLoading, setLoading] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(true);

  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  return (
    <>
      {isLoading && (<Preloader></Preloader>)}
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<HomeTemplate />} >
          <Route path="/" element={<Dashboard />}/>
          <Route path="/my-task" element={<Main />} />
          <Route path="/quotes" element={<MotivationalQuotes handleShowLoading={showLoading} handleHideLoading={hideLoading} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App

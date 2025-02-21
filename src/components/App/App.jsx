import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoadingContext from '../../context/LoadingContext'
import { PopupProvider } from '../../context/PopupContext'

import Main from '../Main/Main'
import Dashboard from '../Dashboard/Dashboard'
import Profile from '../Profile/Profile'
import Settings from '../Settings/Settings'
import PageNotFound from '../PageNotFound/PageNotFound'
import MotivationalQuotes from '../MotivationalQuotes/MotivationalQuotes'
import Signup from '../Signup/Signup'
import Signin from '../Signin/Signin'
import HomeTemplate from '../HomeTemplate/HomeTemplate'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

function App() {

  const [isLoading, setLoading] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  return (
    <LoadingContext.Provider value={{isLoading, showLoading, hideLoading}}>
      <PopupProvider value={{isPopupOpen, setPopupOpen}}>
        <Routes>
          {/* <Route path="*" element={<PageNotFound />} /> */}
          <Route path="*" element={
            isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <Navigate to="/signin" />
            )
          } />
          <Route path="/" element={<HomeTemplate />} >
            <Route path="/" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </ProtectedRoute>
            }/>
            <Route path="/my-task" element={<Main />} />
            <Route path="/quotes" element={<MotivationalQuotes />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </PopupProvider>
    </LoadingContext.Provider>
  );
}

export default App
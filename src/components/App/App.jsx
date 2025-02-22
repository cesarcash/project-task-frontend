import { useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
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
import api from '../../utils/MainApi'

function App() {

  const [userData, setUserData] = useState({name: '', email: ''})
  const [isLoading, setLoading] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  const navigate = useNavigate();

  const handleRegistration = async ({name, email, password}) => {

    const res = await api.signup({name, email, password});
    console.log("🚀 ~ handleRegistration ~ res:", res)

    // if(res.data){
    //   navigate('/signin');
    // }

  }

  const handleLogin = async ({email, password}) => {

    if(!email || !password) return;

    try {
      
      const res = await api.signin({email, password});
      console.log("🚀 ~ handleLogin ~ res:", res)
      if(res.token){
        navigate('/');
        setLoggedIn(true)
        // setUserData({})
      }

    }catch(err){
      console.log("🚀 ~ handleLogin ~ err:", err)
    }
    

  }

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
          <Route path="/signin" element={<Signin handleLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup handleRegistration={handleRegistration} />} />
        </Routes>
      </PopupProvider>
    </LoadingContext.Provider>
  );
}

export default App
import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import LoadingContext from '../../context/LoadingContext'
import CurrentUserContext from '../../context/CurrentUserContext'
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
import { setToken, getToken, removeToken } from '../../utils/token'

function App() {

  const [currentUser, setCurrentUser] = useState({name: '', email: '', avatar: ''});
  const [userData, setUserData] = useState({})
  const [isLoading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  const navigate = useNavigate();
  const location = useLocation();

  const signOut = () => {
    removeToken();
    navigate("/login");
    setIsLoggedIn(false);
  }

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
      if(res.token){
        setToken(res.token);
        setIsLoggedIn(true)
        setCurrentUser({name: res.data.name, email: res.data.email, avatar: res.data.avatar})
        // navigate('/');
        const redirectPath = location.state?.from?.pathname || '/';
        navigate(redirectPath)
      }

    }catch(err){
      console.log("🚀 ~ handleLogin ~ err:", err)
    }

  }

  useEffect(() => {
    
    const fetchUserInfo = async () => {

      try {

        const res = await api.getUserInfo();
        setIsLoggedIn(true)
        setCurrentUser({name: res.name, email: res.email, avatar: res.avatar})
        // navigate('/');

      }catch(err){
        console.error("Error al obtener la información del usuario: ",err);
      }

    }
    
    const jwt = getToken();

    if(jwt){
      fetchUserInfo();
    }else{
      navigate('/signin')
    }

  },[])

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
            <Route path="/" element={<HomeTemplate signOut={signOut} />} >
              <Route path="/" element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Dashboard />
                </ProtectedRoute>
              }/>
              <Route path="/my-task" element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Main />
                </ProtectedRoute>
              }/>
              <Route path="/quotes" element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <MotivationalQuotes />
                </ProtectedRoute>
              }/>
              <Route path="/profile" element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile />  
                </ProtectedRoute>
              }/>
              <Route path="/settings" element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Settings />
                </ProtectedRoute>
              }/>
            </Route>
            <Route path="/signin" element={
              <ProtectedRoute isLoggedIn={isLoggedIn} anonymous>
                <Signin handleLogin={handleLogin} />
              </ProtectedRoute>
            }/>
            <Route path="/signup" element={
              <ProtectedRoute isLoggedIn={isLoggedIn} anonymous>
                <Signup handleRegistration={handleRegistration} />
              </ProtectedRoute>
            }/>
          </Routes>
        </PopupProvider>
      </LoadingContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App
import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import LoadingContext from '../../context/LoadingContext'
import CurrentUserContext from '../../context/CurrentUserContext'
import { PopupProvider } from '../../context/PopupContext'
import { ToastContainer, toast } from 'react-toastify';

import Main from '../Main/Main'
import Dashboard from '../Dashboard/Dashboard'
import Profile from '../Profile/Profile'
import Settings from '../Settings/Settings'
import MotivationalQuotes from '../MotivationalQuotes/MotivationalQuotes'
import Signup from '../Signup/Signup'
import Signin from '../Signin/Signin'
import HomeTemplate from '../HomeTemplate/HomeTemplate'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import api from '../../utils/MainApi'
import { setToken, getToken, removeToken } from '../../utils/token'

function App() {

  const [currentUser, setCurrentUser] = useState({name: '', email: '', avatar: ''});
  const [isLoading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [apiToken, setApiToken] = useState(getToken || '');
  const [statusTask, setStatusTask] = useState('')

  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    
    const jwt = getToken();

    if(jwt){
      fetchUserInfo();
      fetchUserTasks();
      setApiToken(jwt);
    }else{
      navigate('/signin')
    }

  },[apiToken])

  const signOut = () => {
    removeToken();
    navigate("/login");
    setIsLoggedIn(false);
  }

  const handleRegistration = async ({name, email, password}) => {

    try {
      const res = await api.signup({ name, email, password });
      if(res.data){
        navigate('/signin')
        toast.success('Registro exitoso', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (err) {
      console.error("Error en el registro:", err.message);
      toast.error(`${err.message}`, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      throw err;
    }

  }

  const handleLogin = async ({email, password}) => {

    if(!email || !password) return;

    try {
      
      const res = await api.signin({email, password});
      if(res.token){
        setApiToken(res.token);
        setToken(res.token);
        setIsLoggedIn(true)
        setCurrentUser({name: res.data.name, email: res.data.email, avatar: res.data.avatar})
        const redirectPath = location.state?.from?.pathname || '/';
        navigate(redirectPath)
      }

    }catch(err){
      console.log(err)
      toast.error(`${err}`, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      throw err;
      
    }
    
  }

  const handleTaskNew = async ({title, description, endDate}) => {

    if(!title || !description || !endDate) return;

    try {

      const res = await api.createTask({title, description, endDate});
      if(res.data){
        setTasks([res.data, ...tasks])
        setPopupOpen(false);
      }

    }catch(err){
      console.log("🚀 ~ handleTaskNew ~ err:", err)
      toast.error(`${err}`, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

  }

  const handleTaskDelete = async (task) => {

    try {

      await api.deleteTask(task._id);
      setTasks(tasks.filter(itemTask => itemTask._id !== task._id));

    }catch(err){
      console.log("🚀 ~ handleTaskDelete ~ err:", err)
      toast.error(`${err}`, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

  }

  const handleTaskStatus = async (task,{status}) => {

    try {
      const res = await api.updateTaskStatus(task._id,{status});
      if(res.data){
        fetchUserTasks()
        setStatusTask(status)
      }
    }catch(err){
      console.log("🚀 ~ handleTaskStatus ~ err:", err)
      toast.error(`${err}`, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

  }

  const handleUpdateProfile = async ({name,avatar,password}) => {

    if(!name, !avatar ) return;

    try {

      const res = await api.updateUser({name,avatar,password});
      if(res.data){
        setCurrentUser(res.data)
        toast.success('Datos guardados', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

    }catch(err){
      console.log("🚀 ~ handleUpdateProfile ~ err:", err)
      toast.error(`${err}`, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      
    }

  }

  async function fetchUserInfo(){

    try {

      const res = await api.getUserInfo();
      setIsLoggedIn(true)
      setCurrentUser({name: res.name, email: res.email, avatar: res.avatar})

    }catch(err){
      console.error("Error al obtener la información del usuario: ",err);
    }

  }

  async function fetchUserTasks(){

    try {

      const res = await api.getTasks();
      if(res.data){
        setTasks(res.data);
      }

    }catch(err){
      console.log("🚀 ~ fetchUserTasks ~ err:", err)
    }

  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <LoadingContext.Provider value={{isLoading, showLoading, hideLoading}}>
        <PopupProvider isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
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
                  <Main handleTaskNew={handleTaskNew} statusTask={statusTask} setStatusTask={setStatusTask} tasks={tasks} onTaskDelete={handleTaskDelete} onTaskUpdate={handleTaskStatus} />
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
                  <Settings handleUpdateProfile={handleUpdateProfile} />
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
          <ToastContainer 
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
           />
        </PopupProvider>
      </LoadingContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App
import '../blocks/PageLogin.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

    return (

        <div className="login">
            <h1 className="login__title">App Task</h1>
            <form className="form form--login">
                <p className="login__paragraph">Inicio de sesión</p>
                <div className="form__row">
                    <input type="email" className="form__input" placeholder="Email" required />
                </div>
                <div className="form__row">
                    <input type="password" className="form__input" placeholder="Password" required />
                </div>
                <div className="form__row">
                    <button className='form__button' type="submit"><FontAwesomeIcon icon={faRightToBracket} /> Ingresar</button>
                </div>
                <p className="login__paragraph login__paragraph--small">
                    ¿Aún no eres miembro? Regístrate <NavLink to="/register" className="login__paragraph_link">aquí</NavLink>
                </p>
            </form>                
        </div>
        
    );

}

export default Login;
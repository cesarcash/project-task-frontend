import '../blocks/PageLogin.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {

    return (

        <div className="login">
            <h1 className="login__title">App Task</h1>
            <form className="form form--login">
                <p className="login__paragraph">Registro</p>
                <div className="form__row">
                    <input type="text" className="form__input" placeholder="Nombre de usuario" required />
                </div>
                <div className="form__row">
                    <input type="email" className="form__input" placeholder="Email" required />
                </div>
                <div className="form__row">
                    <input type="password" className="form__input" placeholder="Password" required />
                </div>
                <div className="form__row">
                    <button className='form__button' type="submit"><FontAwesomeIcon icon={faRightToBracket} /> Registrar</button>
                </div>
                <p className="login__paragraph login__paragraph--small">¿Ya eres miembro? Inicia sesión <NavLink to="/signin" className="login__paragraph_link">aquí</NavLink></p>
            </form>                
        </div>
        
    );

}

export default Signup;
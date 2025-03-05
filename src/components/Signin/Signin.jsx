import '../blocks/PageLogin.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useFormWithValidation } from '../../utils/validationForm';
import { useEffect } from 'react';

const Sigin = ({ handleLogin, dataError, setDataError }) => {    

    const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();

    // useEffect(() => {
    //     setDataError(null);
    // },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isValid){
            handleLogin(values);
            resetForm();
        }
    }

    return (
        <div className="login">
            <h1 className="login__title">App Task</h1>
            <form className="form form--login" onSubmit={handleSubmit}>
                <p className="login__paragraph">Inicio de sesión</p>
                <div className="form__row">
                    <input type="email" className="form__input" value={values.email || ''} name="email" placeholder="Email" required onChange={handleChange} />
                    <span className="error">{errors.email}</span>
                </div>
                <div className="form__row">
                    <input type="password" className="form__input" value={values.password || ''} name="password" placeholder="Password" required onChange={handleChange} />
                    <span className="error">{errors.password}</span>
                </div>
                <div className="form__row">
                    <button className="form__button" disabled={!isValid} type="submit"><FontAwesomeIcon icon={faRightToBracket} /> Ingresar</button>
                </div>
                <p className="login__paragraph login__paragraph--small">
                    ¿Aún no eres miembro? Regístrate <NavLink to="/signup" className="login__paragraph_link">aquí</NavLink>
                </p>
            </form>
            {
                // dataError && <div>{dataError}</div>
            }
        </div>
        
    );

}

export default Sigin;
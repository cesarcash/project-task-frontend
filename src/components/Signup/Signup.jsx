import '../blocks/PageLogin.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useFormWithValidation } from '../../utils/validationForm';

const Signup = ({handleRegistration}) => {

    const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isValid){
            handleRegistration(values);
            resetForm();
        }
    }

    return (

        <div className="login">
            <h1 className="login__title">App Task</h1>
            <form className="form form--login" onSubmit={handleSubmit}>
                <p className="login__paragraph">Registro</p>
                <div className="form__row">
                    <input type="text" className="form__input" name="name" value={values.name || ''} placeholder="Nombre de usuario" required onChange={handleChange} />
                    <span className="error">{errors.name}</span>
                </div>
                <div className="form__row">
                    <input type="email" className="form__input" name="email" value={values.email || ''} placeholder="Email" required onChange={handleChange} />
                    <span className="error">{errors.email}</span>
                </div>
                <div className="form__row">
                    <input type="password" className="form__input" name="password" value={values.password || ''} placeholder="Password" required onChange={handleChange} />
                    <span className="error">{errors.password}</span>
                </div>
                <div className="form__row">
                    <button className='form__button' disabled={!isValid} type="submit"><FontAwesomeIcon icon={faRightToBracket} /> Registrar</button>
                </div>
                <p className="login__paragraph login__paragraph--small">¿Ya eres miembro? Inicia sesión <NavLink to="/signin" className="login__paragraph_link">aquí</NavLink></p>
            </form>                
        </div>
        
    );

}

export default Signup;
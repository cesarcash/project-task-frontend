import '../blocks/PageLogin.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Signup = () => {

    const [data, setData] = useState({
        nombre: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (

        <div className="login">
            <h1 className="login__title">App Task</h1>
            <form className="form form--login">
                <p className="login__paragraph">Registro</p>
                <div className="form__row">
                    <input type="text" className="form__input" name="nombre" value={data.nombre} placeholder="Nombre de usuario" required onChange={handleChange} />
                </div>
                <div className="form__row">
                    <input type="email" className="form__input" name="email" value={data.email} placeholder="Email" required onChange={handleChange} />
                </div>
                <div className="form__row">
                    <input type="password" className="form__input" name="password" value={data.password} placeholder="Password" required onChange={handleChange} />
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
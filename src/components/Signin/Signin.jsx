import '../blocks/PageLogin.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Sigin = ({ handleLogin }) => {

    const [data, setData] = useState({
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

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(data);
    }

    return (

        <div className="login">
            <h1 className="login__title">App Task</h1>
            <form className="form form--login" onSubmit={handleSubmit}>
                <p className="login__paragraph">Inicio de sesión</p>
                <div className="form__row">
                    <input type="email" className="form__input" name="email" placeholder="Email" required onChange={handleChange} />
                </div>
                <div className="form__row">
                    <input type="password" className="form__input" name="password" placeholder="Password" required onChange={handleChange} />
                </div>
                <div className="form__row">
                    <button className='form__button' type="submit"><FontAwesomeIcon icon={faRightToBracket} /> Ingresar</button>
                </div>
                <p className="login__paragraph login__paragraph--small">
                    ¿Aún no eres miembro? Regístrate <NavLink to="/signup" className="login__paragraph_link">aquí</NavLink>
                </p>
            </form>                
        </div>
        
    );

}

export default Sigin;
import './Settings.css';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Settings = () => {

    const [inputType, setInputType] = useState('password');
    const inputToggleType = (e) => {
        e.preventDefault();
        setInputType((prevType) => (prevType === 'text' ? 'password' : 'text'));
    }

    return (
        <main className="main">
            <Header>
                <h2 className="header__title">Ajustes</h2>
            </Header>
            <section className="setings">
                <form className="form">
                    <div className="form__row">
                        <label className="form__label" htmlFor="nombre">Nombre de usuario</label>
                        <input className="form__input" type="text" name="name" id="nombre" required />
                    </div>
                    <div className="form__row">
                        <label className="form__label" htmlFor="avatar">Avatar</label>
                        <input className="form__input" type="url" name="avatar" id="avatar" required />
                    </div>
                    <div className="form__row">
                        <label className="form__label" htmlFor="password">Contraseña</label>
                        <input className="form__input" type={inputType} name="password" id="password" required />
                    </div>
                    <div className="form__row">
                        <button onClick={inputToggleType} className="form__button form__button--icon-button">
                            {inputType == 'password' ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} /> }
                        </button>
                    </div>
                    <button className="form__button" type="submit">Guardar cambios</button>
                </form>
            </section>
        </main>
    );
}

export default Settings;
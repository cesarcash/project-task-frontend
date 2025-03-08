import { useContext, useState, useEffect } from 'react';
import './Settings.css';
import Header from '../Header/Header';
import CurrentUserContext from '../../context/CurrentUserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Settings = ({handleUpdateProfile}) => {

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [password, setPassword] = useState('');
    const [inputType, setInputType] = useState('password');
    const currentUser = useContext(CurrentUserContext);

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeAvatar = (e) => {
        setAvatar(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const inputToggleType = (e) => {
        e.preventDefault();
        setInputType((prevType) => (prevType === 'text' ? 'password' : 'text'));
    }

    useEffect(() => {

        setName(currentUser.name);
        setAvatar(currentUser.avatar);

    },[currentUser])
    

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateProfile({name, avatar, password});
    }

    return (
        <main className="main">
            <Header>
                <h2 className="header__title">Ajustes</h2>
            </Header>
            <section className="setings">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form__row">
                        <label className="form__label" htmlFor="nombre">Nombre de usuario</label>
                        <input className="form__input" value={name} onChange={handleChangeName} type="text" name="name" id="nombre" required />
                    </div>
                    <div className="form__row">
                        <label className="form__label" htmlFor="avatar">Avatar</label>
                        <input className="form__input" value={avatar} onChange={handleChangeAvatar} type="url" name="avatar" id="avatar" required />
                    </div>
                    <div className="form__row">
                        <label className="form__label" htmlFor="password">Contraseña</label>
                        <input className="form__input" onChange={handleChangePassword} type={inputType} name="password" id="password" />
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
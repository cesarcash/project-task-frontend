import './Profile.css';
import Header from '../Header/Header';

const Profile = () => {
    return (
        <main className="main">
            <Header>
                <h2 className="header__title">Perfil del usuario</h2>
            </Header>
            <section className="profile">
                <form className="form">
                    <div className="form__row">
                        <label className="form__label" htmlFor="nombre">Nombre de usuario</label>
                        <input className="form__input" type="text" id="nombre" required />
                    </div>
                    <div className="form__row">
                        <label className="form__label" htmlFor="avatar">Avatar</label>
                        <input className="form__input" type="url" id="avatar" required />
                    </div>
                    <div className="form__row">
                        <label className="form__label" htmlFor="password">Contraseña</label>
                        <input className="form__input" type="text" id="password" required />
                    </div>
                    <button className="form__button">Guardar cambios</button>
                </form>
            </section>
        </main>
    );
}

export default Profile;
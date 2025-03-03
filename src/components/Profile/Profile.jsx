import { useContext } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import CurrentUserContext from '../../context/CurrentUserContext';

const Profile = () => {
    const user = useContext(CurrentUserContext);
    return (
        <main className="main">
            <Header>
                <h2 className="header__title">Perfil del usuario</h2>
            </Header>
            <section className="profile">
                <div className="profile__card">
                    <div className="profile__image-wrapper">
                        <img src={user.avatar} alt={user.name} className="profile__image" />
                    </div>
                    <div className="profile__data">
                        <h2 className="profile__name">Usuario: {user.name}</h2>
                        <p className="profile__email">Email: {user.email}</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Profile;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './Aside.css';
import Avatar from '../../images/avatar.png';

const Aside = () => {
    return (
        <aside className="aside" id="sidebar">
            <div className="aside__container">
                <div className="aside__header">
                    <img src={Avatar} alt="avatar" className="aside__profile" />
                    <h1 className="aside__title">App Task</h1>
                </div>
                <div className="aside__content">
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="" className="menu__link menu__link--isActive">
                                    <FontAwesomeIcon className="menu__icon" icon={faHouse} />
                                    <span className="menu__text">Inicio</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="aside__footer">
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="" className="menu__link">
                                    <FontAwesomeIcon className="menu__icon" icon={faUser} />
                                    <span className="menu__text">Perfil</span>
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="" className="menu__link">
                                    {/* <i className="fas fa-sign-out-alt menu__icon" aria-hidden="true"></i> */}
                                    <FontAwesomeIcon className="menu__icon" icon={faRightFromBracket} />
                                    <span className="menu__text">Salir</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    );
}

export default Aside;
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faRightFromBracket, faListCheck, faGear } from '@fortawesome/free-solid-svg-icons';
import Menu from '../Menu/Menu'
import './Aside.css';
import Avatar from '../../images/avatar.png';

const Aside = () => {

    const customClassName = ({isActive}) => "menu__link" + (isActive ? " menu__link--isActive " : "" );

    return (
        <aside className="aside" id="sidebar">
            <div className="aside__container">
                <div className="aside__header">
                    <img src={Avatar} alt="avatar" className="aside__profile" />
                    <h1 className="aside__title">App Task</h1>
                </div>
                <div className="aside__content">
                    <Menu>
                        <li className="menu__item">
                            <NavLink to="/" className={customClassName}>
                                <FontAwesomeIcon className="menu__icon" icon={faHouse} />
                                <span className="menu__text">Inicio</span>
                            </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/my-task" className={customClassName}>
                                <FontAwesomeIcon className="menu__icon" icon={faListCheck} />
                                <span className="menu__text">Mis tareas</span>
                            </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/profile" className={customClassName}>
                                <FontAwesomeIcon className="menu__icon" icon={faUser} />
                                <span className="menu__text">Perfil</span>
                            </NavLink>
                        </li>
                    </Menu>
                </div>
                <div className="aside__footer">
                    <Menu>
                        <li className="menu__item">
                            <NavLink to="/settings" className={customClassName}>
                                <FontAwesomeIcon className="menu__icon" icon={faGear} />
                                <span className="menu__text">Ajustes</span>
                            </NavLink>
                        </li>
                        <li className="menu__item">
                            <Link to="/logout" className="menu__link">
                                <FontAwesomeIcon className="menu__icon" icon={faRightFromBracket} />
                                <span className="menu__text">Salir</span>
                            </Link>
                        </li>
                    </Menu>
                </div>
            </div>
        </aside>
    );
}

export default Aside;
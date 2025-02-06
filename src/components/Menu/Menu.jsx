import './Menu.css';

const Menu = ({children}) => {
    return (
        <nav className="menu">
            <ul className="menu__list">
                {children}
            </ul>
        </nav>
    );
}

export default Menu;
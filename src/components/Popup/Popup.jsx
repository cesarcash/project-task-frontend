import './Popup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Popup = ({children, title, onClose}) => {

    return(
        <div className="popup">
            <div className="popup__container">
                <FontAwesomeIcon className="popup__icon popup__icon--close" onClick={onClose} icon={faCircleXmark} />
                <div className="popup__header">
                    <h2 className="popup__title">{title}</h2>
                </div>
                <div className="popup__body">
                    {children}
                </div>
            </div>
        </div>
    );

}

export default Popup;
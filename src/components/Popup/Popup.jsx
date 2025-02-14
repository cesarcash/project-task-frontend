import './Popup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Popup = ({children, title, onClose}) => {

    return(
        <div className="popup">
            <FontAwesomeIcon class="popup__icon--close" onClick={onClose} icon={faCircleXmark} />
            <div className="popup__header">
                <h2 className="popup__title">{title}</h2>
            </div>
            <div className="popup__body">
                {children}
            </div>
        </div>
    );

}

export default Popup;
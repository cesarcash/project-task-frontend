import { createContext, useState } from "react";

const PopupContext = createContext();

export const PopupProvider = ({children, isPopupOpen, setPopupOpen}) => {

    // const [isPopupOpen, setPopupOpen] = useState(false);
    const [popupTitle, setPopupTitle] = useState("");
    const [popupContent, setPopupContent] = useState(null);

    const openPopup = (title, content) => {
        setPopupTitle(title);
        setPopupContent(content);
        setPopupOpen(true);
    }

    const closePopup = () => {
        setPopupTitle('');
        setPopupContent(null);
        setPopupOpen(false);
    }

    return (
        <PopupContext.Provider value={{isPopupOpen, popupTitle, popupContent, openPopup, closePopup }}>
            {children}
        </PopupContext.Provider>
    );

}

export default PopupContext;
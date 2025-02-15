import { createContext, useState } from "react";

const PopupContext = createContext();

export const PopupProvider = ({children}) => {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const [popupTitle, setPopupTitle] = useState("");
    const [popupContent, setPopupContent] = useState(null);

    const openPopup = (title, content) => {
        setPopupTitle(title);
        setPopupContent(content);
        setPopupOpen(true);
    }

    return (
        <PopupContext.Provider value={{isPopupOpen, setPopupOpen, popupTitle, popupContent, openPopup }}>
            {children}
        </PopupContext.Provider>
    );

}

export default PopupContext;
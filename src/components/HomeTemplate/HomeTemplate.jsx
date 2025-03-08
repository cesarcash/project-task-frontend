import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import LoadingContext from "../../context/LoadingContext";
import PopupContext from "../../context/PopupContext";
import Popup from "../Popup/Popup";

const HomeTemplate = ({signOut}) => {
    
    const loading = useContext(LoadingContext);
    const popup = useContext(PopupContext);
    
    return (
        <div className="page">
            {loading.isLoading && (<Preloader></Preloader>)}
            {popup.isPopupOpen && (
                <Popup onClose={popup.closePopup} title={popup.popupTitle}>
                    {popup.popupContent}     
                </Popup>
            )}
            <Aside signOut={signOut}></Aside>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );

}

export default HomeTemplate;
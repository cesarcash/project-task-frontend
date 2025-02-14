import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import LoadingContext from "../../context/LoadingContext";
import Preloader from "../Preloader/Preloader";

const HomeTemplate = () => {

    const loading = useContext(LoadingContext);

    return (
        <div className="page">
            {loading.isLoading && (<Preloader></Preloader>)}
            <Aside></Aside>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );

}

export default HomeTemplate;
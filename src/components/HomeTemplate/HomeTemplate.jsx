import { Outlet } from "react-router-dom";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";

const HomeTemplate = () => {

    return (
        <div className="page">
            <Aside></Aside>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );

}

export default HomeTemplate;
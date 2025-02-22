import './PageNotFound.css';

const PageNotFound = () => {

    return (
        <div className="not-found">
            <h3 className="not-found__title">
                <span>404</span> - ¡Página no encontrada!
            </h3>
            <p className="not-found__text">
                ¡Uy! Aquí no hay nada... Lo sentimos. 🥺
            </p>
        </div>
    );

}

export default PageNotFound;
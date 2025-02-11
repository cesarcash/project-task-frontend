import Header from '../Header/Header';

import './Main.css';

const Main = () => {
    return (
        <main className="main">
            <Header>
                <h2 className="header__title">Mis tareas</h2>
                <button className="form__button">Añadir tarea</button>
            </Header>
            <section className="main__body">
                <div className="main__pending">
                    <p className="main__body-title main__body-title--pending">PENDIENTE</p>
                    <div className="main__task">
                        <p className="main__task-title">Titulo de la tarea</p>
                        <p className="main__task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis ullam ea rerum iusto dolorem consectetur temporibus ipsa, repudiandae provident beatae nobis nostrum eius quidem, porro ipsam id praesentium incidunt?</p>
                        <p className="main__task-date">21/01/2025</p>
                    </div>
                    <div className="main__task">
                        <p className="main__task-title">Titulo de la tarea</p>
                        <p className="main__task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis ullam ea rerum iusto dolorem consectetur temporibus ipsa, repudiandae provident beatae nobis nostrum eius quidem, porro ipsam id praesentium incidunt?</p>
                        <p className="main__task-date">21/01/2025</p>
                    </div>
                    <div className="main__task">
                        <p className="main__task-title">Titulo de la tarea</p>
                        <p className="main__task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis ullam ea rerum iusto dolorem consectetur temporibus ipsa, repudiandae provident beatae nobis nostrum eius quidem, porro ipsam id praesentium incidunt?</p>
                        <p className="main__task-date">21/01/2025</p>
                    </div>
                    <div className="main__task">
                        <p className="main__task-title">Titulo de la tarea</p>
                        <p className="main__task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis ullam ea rerum iusto dolorem consectetur temporibus ipsa, repudiandae provident beatae nobis nostrum eius quidem, porro ipsam id praesentium incidunt?</p>
                        <p className="main__task-date">21/01/2025</p>
                    </div>
                    <div className="main__task">
                        <p className="main__task-title">Titulo de la tarea</p>
                        <p className="main__task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis ullam ea rerum iusto dolorem consectetur temporibus ipsa, repudiandae provident beatae nobis nostrum eius quidem, porro ipsam id praesentium incidunt?</p>
                        <p className="main__task-date">21/01/2025</p>
                    </div>
                    <div className="main__task">
                        <p className="main__task-title">Titulo de la tarea</p>
                        <p className="main__task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis ullam ea rerum iusto dolorem consectetur temporibus ipsa, repudiandae provident beatae nobis nostrum eius quidem, porro ipsam id praesentium incidunt?</p>
                        <p className="main__task-date">21/01/2025</p>
                    </div>
                    <div className="main__task">
                        <p className="main__task-title">Titulo de la tarea</p>
                        <p className="main__task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis ullam ea rerum iusto dolorem consectetur temporibus ipsa, repudiandae provident beatae nobis nostrum eius quidem, porro ipsam id praesentium incidunt?</p>
                        <p className="main__task-date">21/01/2025</p>
                    </div>
                    <div className="main__task">
                        <p className="main__task-title">Titulo de la tarea</p>
                        <p className="main__task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis ullam ea rerum iusto dolorem consectetur temporibus ipsa, repudiandae provident beatae nobis nostrum eius quidem, porro ipsam id praesentium incidunt?</p>
                        <p className="main__task-date">21/01/2025</p>
                    </div>
                </div>

                <div className="main__progress">
                    <p className="main__body-title main__body-title--doing">HACIENDO</p>
                    <div className="main__task">
                        <p className="main__task-title">Titulo de la tarea</p>
                        <p className="main__task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis ullam ea rerum iusto dolorem consectetur temporibus ipsa, repudiandae provident beatae nobis nostrum eius quidem, porro ipsam id praesentium incidunt?</p>
                    </div>
                    <div className="main__task">
                        <p className="main__task-title">Titulo de la tarea</p>
                        <p className="main__task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis ullam ea rerum iusto dolorem consectetur temporibus ipsa, repudiandae provident beatae nobis nostrum eius quidem, porro ipsam id praesentium incidunt?</p>
                    </div>
                </div>

                <div className="main__done">
                    <p className="main__body-title main__body-title--completed">TERMINADAS</p>
                    <div className="main__task">
                        <p className="main__task-title">Titulo de la tarea</p>
                        <p className="main__task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis ullam ea rerum iusto dolorem consectetur temporibus ipsa, repudiandae provident beatae nobis nostrum eius quidem, porro ipsam id praesentium incidunt?</p>
                    </div>
                    <div className="main__task">
                        <p className="main__task-title">Titulo de la tarea</p>
                        <p className="main__task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis ullam ea rerum iusto dolorem consectetur temporibus ipsa, repudiandae provident beatae nobis nostrum eius quidem, porro ipsam id praesentium incidunt?</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;
import './Main.css';

const Main = () => {
    return (
        <main className="main">
            <div className="main__header">
                <h2 className="main__title">Lista de tareas</h2>
                <button className="main__add-task button">Añadir tarea</button>
            </div>
            <div className="main__body">
                <div className="main__todo">
                    <p className="main__body-title">POR HACER</p>
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
                <div className="main__done">
                    <p className="main__body-title main__body-title--highlighted">TERMINADAS</p>
                    <div className="main__task">
                        <p className="main__task-title">Titulo de la tarea</p>
                        <p className="main__task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis ullam ea rerum iusto dolorem consectetur temporibus ipsa, repudiandae provident beatae nobis nostrum eius quidem, porro ipsam id praesentium incidunt?</p>
                    </div>
                    <div className="main__task">
                        <p className="main__task-title">Titulo de la tarea</p>
                        <p className="main__task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis ullam ea rerum iusto dolorem consectetur temporibus ipsa, repudiandae provident beatae nobis nostrum eius quidem, porro ipsam id praesentium incidunt?</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;
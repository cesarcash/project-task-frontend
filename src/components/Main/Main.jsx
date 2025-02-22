import { useContext } from 'react';
import Header from '../Header/Header';
import PopupContext from "../../context/PopupContext";

import './Main.css';

const Main = () => {

    const {openPopup} = useContext(PopupContext);

    const handleAddTask = () => {
        openPopup('Nueva tarea', (
            <form className="form">
                <div className="form__row">
                    <label htmlFor="titulo" className="form__label">Título de la tarea</label>
                    <input type="text" id="titulo" className="form__input" name="title" required />
                </div>
                <div className="form__row">
                    <label htmlFor="descripcion" className="form__label">Descripción</label>
                    <textarea className="form__input" id="descripcion" name="description" required></textarea>
                </div>
                <div className="form__row">
                    <label htmlFor="date" className="form__label">Fecha de término</label>
                    <input type="date" className="form__input" id="date" name="endDate" />
                </div>
                <div className="form__row">
                    <button className="form__button form__button--add-task" type="submit">Añadir tarea</button>
                </div>
            </form>
        ));
    }

    return (
        <main className="main">
            <Header>
                <h2 className="header__title">Mis tareas</h2>
                <button className="form__button" onClick={handleAddTask}>Añadir tarea</button>
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
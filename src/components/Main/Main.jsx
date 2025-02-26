import { useContext, useState } from 'react';
import Header from '../Header/Header';
import PopupContext from "../../context/PopupContext";
import TaskForm from '../TaskForm/TaskForm';
import moment from 'moment';

import './Main.css';

const Main = ({handleNewTask,tasks}) => {

    const {openPopup} = useContext(PopupContext);

    const handleAddTask = () => {
        openPopup('Nueva tarea', <TaskForm handleNewTask={handleNewTask} />);
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
                    {
                        tasks.map(task => {
                            task.endDate = moment(task.endDate).format('YYYY-MM-DD');
                            return(
                                <div className="main__task" key={task._id}>
                                    <p className="main__task-title">{task.title}</p>
                                    <p className="main__task-description">{task.description}</p>
                                    <p className="main__task-date">{task.endDate}</p>
                                </div>
                            )
                        })
                    }
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
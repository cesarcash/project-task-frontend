import { useContext } from 'react';
import moment from 'moment';
import Header from '../Header/Header';
import PopupContext from "../../context/PopupContext";
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import './Main.css';

const Main = ({handleTaskNew,tasks,onTaskDelete,onTaskUpdate}) => {

    const formattedTasks = tasks.map(task => ({
        ...task,
        endDate: moment(task.endDate).format("YYYY-MM-DD"),
        createdAt: moment(task.createdAt).format("YYYY-MM-DD"),
    }));

    const {openPopup} = useContext(PopupContext);

    const handleAddTask = () => {
        openPopup('Nueva tarea', <TaskForm handleTaskNew={handleTaskNew} />);
    }

    const handleTaskDelete = (task) => {
        onTaskDelete(task)
    }

    const handleTaskUpdate = (task,status) => {
        console.log('hola')
        onTaskUpdate(task,status)
    }

    return (
        <main className="main">
            <Header>
                <h2 className="header__title">Mis tareas</h2>
                <button className="form__button" onClick={handleAddTask}>Añadir tarea</button>
            </Header>
            <section className="main__body">
                <TaskList
                    title="PENDING"
                    tasks={formattedTasks.filter(task => task.status === "pending")}
                    nextStatus="in progress"
                    handleTaskUpdate={handleTaskUpdate}
                    handleTaskDelete={handleTaskDelete}
                    showDelete={true}
                />

                <TaskList
                    title="DOING"
                    tasks={formattedTasks.filter(task => task.status === "in progress")}
                    nextStatus="completed"
                    handleTaskUpdate={handleTaskUpdate}
                />

                <TaskList
                    title="COMPLETED"
                    tasks={formattedTasks.filter(task => task.status === "completed")}
                />
            </section>
        </main>
    )
}

export default Main;
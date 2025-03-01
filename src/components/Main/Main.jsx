import { useContext, useEffect } from 'react';
import moment from 'moment';
import Header from '../Header/Header';
import PopupContext from "../../context/PopupContext";
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import api from '../../utils/ThirdPartyApi';
import MotivationalQuote from '../MotivationalQuote/MotivationalQuote';
import './Main.css';

const Main = ({handleTaskNew,tasks,onTaskDelete,onTaskUpdate,statusTask,setStatusTask,handleLikeQuote}) => {

    const {openPopup} = useContext(PopupContext);

    const setQuoteRandom = (data) => {

        const quote = data[0];
        openPopup('Haz terminado tu tarea', <MotivationalQuote quote={quote} handleLikeQuote={handleLikeQuote} />)
        setStatusTask(false);

    }

    useEffect(() => {

        const fetchQuoteRandom = async () => {
    
            try{
                const quote = await api.getQuote();
                setQuoteRandom(quote)
            }catch(err){
                console.log("🚀 ~ fetchQuoteRandom ~ err:", err)
            }

        }

        if(statusTask === 'completed'){
            fetchQuoteRandom();
        }

    },[statusTask])
    


    const formattedTasks = tasks.map(task => ({
        ...task,
        endDate: moment(task.endDate).format("YYYY-MM-DD"),
        createdAt: moment(task.createdAt).format("YYYY-MM-DD"),
    }));


    const handleAddTask = () => {
        openPopup('Nueva tarea', <TaskForm handleTaskNew={handleTaskNew} />);
    }

    const handleTaskDelete = (task) => {
        onTaskDelete(task)
    }

    const handleTaskUpdate = (task,status) => {
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
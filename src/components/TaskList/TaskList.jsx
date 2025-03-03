import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faTrash, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const TaskList = ({ title, tasks, handleTaskUpdate, handleTaskDelete, nextStatus, showDelete }) => {

    const titulo = {
        'PENDING': 'POR HACER',
        'DOING': 'HACIENDO',
        'COMPLETED': 'FINALIZADAS'
    }

    return (

        <div className={`main__${title.toLowerCase()}`}>
            <p className={`main__body-title main__body-title--${title.toLowerCase()}`}>{titulo[title]}</p>
            {
                tasks.map(task => (
                    <div className="main__task" key={task._id}>
                        <p className="main__task-title">{task.title}</p>
                        <p className="main__task-description">{task.description}</p>
                        <div className="main__task-date-container">
                            <p className="main__task-date">Fecha de registro: {task.createdAt}</p>
                            <p className="main__task-date">Fecha de término: {task.endDate}</p>
                        </div>
                        <div className="main__task-date-actions">
                            {nextStatus && (
                                <button className={`main__button main__button--${nextStatus === 'in progress' ? 'start' : 'finished' }`} onClick={() => {                                    
                                    handleTaskUpdate(task, { status: nextStatus })
                                    }}>
                                    <FontAwesomeIcon icon={nextStatus === 'in progress' ? faPlay : faCircleCheck } /> {nextStatus === "in progress" ? "Iniciar tarea" : "Finalizar tarea"}
                                </button>
                            )}
                            {showDelete && (
                                <button className="main__button main__button--cancel" onClick={() => handleTaskDelete(task)}>
                                    <FontAwesomeIcon icon={faTrash} /> Eliminar tarea
                                </button>
                            )}
                        </div>
                    </div>
                ))
            }
        </div>

    )

}

export default TaskList;
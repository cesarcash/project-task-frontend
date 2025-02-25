import { useState } from "react"

const TaskForm = ({handleNewTask}) => {

    const [data, setData] = useState({
        title: '',
        description: '',
        endDate: ''
    });
    
    const handleChange = (e) => {

        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        console.log(data)

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("🚀 ~ handleSubmit ~ data:", data)
        handleNewTask(data);
    }

    return (

        <form className="form" onSubmit={handleSubmit}>
            <div className="form__row">
                <label htmlFor="titulo" className="form__label">Título de la tarea</label>
                <input type="text" id="titulo" className="form__input" name="title" required onChange={handleChange} />
            </div>
            <div className="form__row">
                <label htmlFor="descripcion" className="form__label">Descripción</label>
                <textarea className="form__input" id="descripcion" name="description" required onChange={handleChange} ></textarea>
            </div>
            <div className="form__row">
                <label htmlFor="date" className="form__label">Fecha de término</label>
                <input type="date" className="form__input" id="date" name="endDate" required onChange={handleChange} />
            </div>
            <div className="form__row">
                <button className="form__button form__button--add-task" type="submit">Añadir tarea</button>
            </div>
        </form>

    );

}

export default TaskForm;
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './Todos.css'
import { Alert } from 'reactstrap';

function Todos({ history }) {

    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(false);
    const [messageHandler, setMessageHandler] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        getTodos()
    }, [])


    const getTodos = async () => {
        const url = '/'
        const response = await api.get(url)
        setTodos(response.data)
    };

    const deleteTodoHandler = async (todoId) => {
        try {
            await api.delete(`/todo/${todoId}`);
            setSuccess(true)
            setMessageHandler('The Todo was deleted successfully!')
            setTimeout(() => {
                setSuccess(false)
                setMessageHandler('')
                window.location.reload();
            }, 2500)

        } catch (error) {
            setError(true)
            setMessageHandler('Error when deleting Todo!')
            setTimeout(() => {
                setError(false)
            }, 2000)
        }
    }

    const updateTodoHandler = async (todoId) => {
        try {
            await api.put(`/completed/${todoId}`);
            window.location.reload();
        } catch (error) {
        }
    }
    return (
        <>
            <div className="container">
                <div className="tasks">
                    {success ? (
                        <Alert className="event-validation" color="success"> The Todo was deleted successfully!</Alert>
                    ) : ""}
                    <p className="texte1">TO-DO LIST</p>
                    <button onClick={() => history.push("/Addtodo")} className="buttonn button1">ADD NEW TO DO</button>
                    <div >
                        {todos.map(todo => (<div className="border" key={todo._id} >
                            <p className="tex" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} >{todo.title}<button onClick={() => deleteTodoHandler(todo._id)} className="button2">Delete</button></p>
                            <button onClick={() => updateTodoHandler(todo._id)} className="button3">Completed</button>
                        </div>
                        ))}

                    </div>
                </div>   </div>

        </>

    )
}

export default Todos

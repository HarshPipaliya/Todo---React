import React, { useRef } from 'react'

function TodoList({ text, todo, setText, setTodos, todos, id, completed, index }) {
    const handleDelete = (id) => {
        setTodos(todos.filter(elem => elem.id !== id))
    }
    const checkHandler = () => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo, completed: !todo.completed
                }
            }
            return todo;
        }))
    }
    return (
        <>
            <div className="col-md-12" style={{ border: "1px solid black", padding: "10px", margin: "10px 0px" }}>
                <h4>Schedule {index + 1}.</h4>
                <div className="row">
                    <div className="col-md-7">
                        <p className={`${completed ? 'completed' : ''}`} style={{ width: "100%" }}>{text}</p>
                    </div>
                    <div className="form-check col-md-1 check-div">
                        <input className="form-check-input check" type="checkbox" value="" id="flexCheckDefault" style={{ width: "33px", height: "33px" }} onClick={() => { checkHandler(id) }} checked={completed} />
                    </div>
                    <div className="col-md-2">
                        <button className='btn btn-danger delete' style={{ width: "100%" }} onClick={() => { handleDelete(id) }}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoList
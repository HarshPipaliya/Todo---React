import React,{ useRef, useEffect } from 'react'
import TodoList from './TodoList'

function Todo({ todos, text, setText, setTodos, setStatus, status, filteredTodo }) {
    const inputRef = useRef();

    useEffect(() => {
      inputRef.current.focus()
    }, [])
    
    const changeHandler = (e) => {
        setText(e.target.value)
    }

    const addHandler = () => {
        let id = Math.floor(Math.random() * 100000)
        if (text.length !== 0) {
            setTodos([...todos, { id: id, text: text, completed: false }])
        }
        setText('')
    }
    
    const changeStatusHandler = (e)=>{
        setStatus(e.target.value)
    }
    return (
        <>
            <div className="container todo my-4">
                <h1 className='text-center'>TODO LIST - REACT</h1>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-7">
                                <form>
                                    <input style={{ width: "100%", padding: "5px 10px" }} type="text" placeholder="Add todo..." onChange={changeHandler} value={text} ref={inputRef} />
                                </form>
                            </div>
                            <div className="col-md-5">
                                <button className="btn btn-primary add" onClick={addHandler}>Add Todo</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <select className="form-select" onChange={changeStatusHandler}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </div>
                <h4 className='my-4'>Today's schedule</h4>
                <div className="row">
                    {
                        filteredTodo.length===0?<p>Nothing to show</p> :filteredTodo.map((todo,index) => {
                            return <TodoList index={index} key={todo.id} todo={todo} id={todo.id} todos={todos} text={todo.text} setText={setText} setTodos={setTodos} completed={todo.completed} status={status}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Todo
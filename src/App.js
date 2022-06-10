import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])
  const [text, setText] = useState('')
  const [status, setStatus] = useState('all')
  const [filteredTodo, setFilteredTodo] = useState([])

  useEffect(() => {
    FunctionfilteredTodo();
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [status, todos])


  const FunctionfilteredTodo = () => {
    switch (status) {
      case 'completed':
        setFilteredTodo(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodo(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodo(todos)
        break;
    }
  }
  return (
    <div className="App">
      <Todo todos={todos} filteredTodo={filteredTodo} text={text} setText={setText} setTodos={setTodos} status={status} setStatus={setStatus} />
    </div>
  );
}

export default App;

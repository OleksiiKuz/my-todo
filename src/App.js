import React, { useState, useEffect } from 'react';
import './App.css';
import Context from './context';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {

  const initialState = {
    todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
  }

  const [todos, setTodos] = useState(initialState.todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  let onToggle = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }

      return todo;
    }))
  }

  let removeTodo = (id) => {
    setTodos(todos.filter(item => item.id !== id));
  }

  function createTodoItem(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false,
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div className="App">
        <h1>Todo application</h1>
        <AddTodo onCreate={createTodoItem} />
        <ul>
          {todos.length ? <TodoList todos={todos} onToggle={onToggle} /> : <p>No todos here, add some</p>}

        </ul>
      </div>
    </Context.Provider >

  );
}

export default App;

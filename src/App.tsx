import React, { useState } from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { IItems } from './types/todo';


const App: React.FC = () => {
  const [todos, setTodos] = useState<IItems[]>([]);

  function todoAddHandler(todo: IItems) {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random().toString(),
          title: todo.title
        }
      ]
    })
  }

  function todoRemoveHandler(id: string): void {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => {
        return item.id !== id;
      });
    })
  }

  return (
    <div className="App">
      <AddTodo onAddTodo={todoAddHandler} />
      <TodoList onRemoveTodo={todoRemoveHandler}  todos={todos} />
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodoContextProvider from './store/todo-context';

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);
  //   setTodos(prevState => {
  //     return [...prevState, newTodo]
  //     //prevState.concat(newTodo);
  //   });
  // }

  // const removeTodoHandler = (id: string) => {
  //   setTodos(prevTodo => {
  //     return prevTodo.filter(todo => todo.id !== id);
  //   })
  // }
  
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;

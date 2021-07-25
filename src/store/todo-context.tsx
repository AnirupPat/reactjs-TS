import React, {useState} from "react";
import Todo from "../models/todo";

type todosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<todosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
})

const TodoContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos(prevState => {
      return [...prevState, newTodo]
      //prevState.concat(newTodo);
    });
  }

  const removeTodoHandler = (id: string) => {
    setTodos(prevTodo => {
      return prevTodo.filter(todo => todo.id !== id);
    })
  }

  const contextValue: todosContextObj= {
      items: todos,
      addTodo: addTodoHandler,
      removeTodo: removeTodoHandler
  }

    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}

export default TodoContextProvider;
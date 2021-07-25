import React, {useRef, useContext} from "react";
import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todo-context";


const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
    const todoTesxtInputRef = useRef<HTMLInputElement>(null);
    const  handleTodoAdd = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTesxtInputRef.current!.value;

        // ? - try to get me the value, and if its null try to store null in the constant.
        // ! - certain that we are not dealing with null so drill into this object, into the property and 
        // give the actual not null value..
        // these are 2 operators of TS

        if(enteredText.trim().length === 0) {
            // throw error
            return;
        }

        todosCtx.addTodo(enteredText);
    }
  return (
    <form className={classes.form} onSubmit={handleTodoAdd}>
      <label htmlFor="text">Todo text</label>
      <input id="text" type="text" ref={todoTesxtInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

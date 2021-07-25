import React, {useContext} from 'react';
import TodoListItem from './TodoListItem';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todo-context';

const Todos: React.FC = (props) => {
    const todosCtx = useContext(TodosContext);
    return (
        <ul className={classes.todo}>
            {todosCtx.items.map(item => <TodoListItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />)}
        </ul>
    )
}

export default Todos;
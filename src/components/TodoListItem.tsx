import React from 'react';
import Todo from '../models/todo';
import classes from './TodoItem.module.css';

const TodoListItem: React.FC<{text: string; key: string; onRemoveTodo: () => void}> = (props) => {
    return (
        <li onClick={props.onRemoveTodo} className={classes.item} key={props.key}>{props.text}</li>
    )
}

export default TodoListItem

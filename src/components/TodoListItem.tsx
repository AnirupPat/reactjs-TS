import React from 'react';
import Todo from '../models/todo';
import classes from './TodoItem.module.css';

const TodoListItem: React.FC<{text: string, key: string}> = (props) => {
    return (
        <li className={classes.item} key={props.key}>{props.text}</li>
    )
}

export default TodoListItem

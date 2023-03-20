import React from 'react';
import { IItems } from '../types/todo';


interface IProps {
    todos: IItems[];
    onRemoveTodo: (id: string) => void;
}

// interface IState {
//     count: number;
// }

const TodoList: React.FC<IProps> = (props) => {
    return (
        <ul>
            {props.todos.map((item) => {
                return (
                    <li key={item.id} >
                        <div>{item.id}</div>
                        <div>{item.title}</div>
                        <button onClick={props.onRemoveTodo.bind(this, item.id)}>Remove</button>
                    </li>
                )
            })}
        </ul>
    )
}

// class TodoList extends React.Component<IProps, IState> {
//     stateHandler() {
//         this.setState(({ count }) => {
            
//         })
//     }
//     render() {
//         return null;
//     }
// }

export default TodoList;
import { ToDoListListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'


export const ToDoList = () => {
    return(
        <>
         <div className="todo-container">
        <ul className="todo-list failed">
            <ToDoListListItem />
        </ul>
        <ul className="todo-list completed">
            <ToDoListListItem />

              {/* <li class="todo-list-item__wrapper">
                <span>Вторая задача</span>
                <div class="todo-list-item__buttons">
                    <button class="btn-trash"></button>
                    <button class="btn-uncheck"></button>
                </div>
            </li> */}
        </ul>
    </div>
        </>
    )
}


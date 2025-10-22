import { ToDo } from "../../../modules/todo-item";
import "./ToDoListItem.scss";
import classes from "./ToDoListItem.module.scss";

export const ToDoListListItem = (props: {
  ToDoItem: ToDo;
  deleteToDo: Function;
  updateToDo: Function;
}) => {
  return (
    <>
      <li className={classes.todolistitem__wrapper}>
        <span>{props.ToDoItem.text}</span>
        <div className={classes.todolistitem__buttons}>
          <button
            className={classes.btntrash}
            onClick={() => props.deleteToDo(props.ToDoItem)}
          ></button>
          <button
            className={
              props.ToDoItem.isDone ? classes.btncheck : classes.btnuncheck
            }
            onClick={() => props.updateToDo(props.ToDoItem)}
          ></button>
        </div>
      </li>
    </>
  );
};

import { ToDo } from "../../../modules/todo-item";
import "./ToDoListItem.scss";
import classes from "./ToDoListItem.module.scss";
import { ToDoItem, ToDoItemButton, ToDoItemControl, ToDoItemText } from "./ToDoListItem.styled";

import checkIcon from "../../../assets/images/check.png"
import uncheckIcon from "../../../assets/images/uncheck.png"
import trashIcon from "../../../assets/images/trash.png"

export const ToDoListListItem = (props: {
  ToDoItem: ToDo;
  deleteToDo: Function;
  updateToDo: Function;
}) => {
  return (
    <>
      <ToDoItem>
        <ToDoItemText>{props.ToDoItem.text}</ToDoItemText>
        <ToDoItemButton>

          <ToDoItemControl
            // className={classes.btntrash}
             icon={trashIcon}
            onClick={() => props.deleteToDo(props.ToDoItem)}
          ></ToDoItemControl>
          <ToDoItemControl
            // className={
            //   props.ToDoItem.isDone ? classes.btncheck : classes.btnuncheck
            // }

            icon={props.ToDoItem.isDone ? checkIcon : uncheckIcon}
            onClick={() => props.updateToDo(props.ToDoItem)}
          ></ToDoItemControl>
        </ToDoItemButton>
      </ToDoItem>
    </>
  );
};

import { ToDoListListItem } from "./ToDoListItem/ToDoListItem";
import "./ToDoList.scss";

import classes from "./ToDoList.module.scss"
import { ToDo } from "../../modules/todo-item";
import { ToDoContainer } from "./ToDoList.styled";
import { ToDoListt } from "./ToDoList.styled";
import { ToDoListComplied } from "./ToDoList.styled";

export const ToDoList = (props: {
  todos: ToDo[];
  deleteToDo: Function;
  updateToDo: Function;
}) => {
  const checkList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item) => {
        return (
          <ToDoListListItem
            ToDoItem={item}
            key={item.id}
            deleteToDo={props.deleteToDo}
            updateToDo={props.updateToDo}
          />
        );
      });
  };

  const uncheckList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item) => {
        return (
          <ToDoListListItem
            ToDoItem={item}
            key={item.id}
            deleteToDo={props.deleteToDo}
            updateToDo={props.updateToDo}
          />
        );
      });
  };

  return (
    <>
      <ToDoContainer>
         <ToDoListComplied >{checkList()}</ToDoListComplied >

        <ToDoListt>{uncheckList()}</ToDoListt>
      </ToDoContainer>
    </>
  );
};

import { ToDoListListItem } from "./ToDoListItem/ToDoListItem";
import "./ToDoList.scss";
import { ToDo } from "../../modules/todo-item";

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
      <div className="todo-container">
        <ul className="todo-list failed">{checkList()}</ul>

        <ul className="todo-list completed">{uncheckList()}</ul>
      </div>
    </>
  );
};

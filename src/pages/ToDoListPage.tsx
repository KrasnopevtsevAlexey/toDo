import { useSelector, useDispatch } from "react-redux";
import { Form } from "../components/Form/Form";
import "../assets/scss/style.scss";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../modules/todo-item";
import { AppRootState, AppDispatch } from "../store"; // Добавьте AppDispatch
import { createAction, updateAction, deleteAction } from "../feature/todoList";
import { v4 as uuid } from "uuid";
export const ToDoListPage = () => {
  const todoList = useSelector((state: AppRootState) => state.todoList.todos);
  const dispatch = useDispatch<AppDispatch>(); // Добавьте тип для dispatch

  const createNewToDo = (text: string) => {
    dispatch(createAction(text));
  };

  const updateToDo = (ToDoItem: ToDo) => {
    dispatch(updateAction(ToDoItem.id));
  };

  const deleteToDo = (ToDoItem: ToDo) => {
    dispatch(deleteAction(ToDoItem.id));
  };

  return (
    <>
      <ToDoList
        todos={todoList}
        deleteToDo={deleteToDo}
        updateToDo={updateToDo}
      />
      <Form createNewToDo={createNewToDo} />
    </>
  );
};

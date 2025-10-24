import { useEffect, useState } from "react";
import { ToDo } from "../modules/todo-item";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppRootState } from "../store";



export const ViewListItem = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [todo, setTodo] = useState<ToDo>();
  const todoList = useSelector((state: AppRootState) => state.todoList.todos);

  useEffect(() => {
    
    const searchTodo = todoList.find((todo) => String(todo.id) === id);
    if (searchTodo) {
      setTodo(searchTodo);
    } else {
      navigate("/404");
    }
  }, [id, navigate, todoList]);
  return (
    <div className="container">
      <h1>{todo?.text}</h1>
    </div>
  );
};

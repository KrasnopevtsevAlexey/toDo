import "../assets/scss/style.scss"
import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../modules/todo-item"
import "../assets/scss/style.scss"
import { useSelector } from "react-redux"
import { AppRootState } from "../store"


export const ViewList = ()=>{
    const todoList = useSelector((state: AppRootState) => state.todoList.todos);
    return(
        <div className="container">
        {
           todoList.map((todo: ToDo) => {
            return (<ListItem todo={todo} key={todo.id}/>)
           })
        }
        </div>
    )
}
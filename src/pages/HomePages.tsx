import "../assets/scss/style.scss"
import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../modules/todo-item"
import "../assets/scss/style.scss"

interface ComponentProps {
    todos: ToDo[];
}

export const HomePages = (props: ComponentProps)=>{
    return(
        <div className="container">
        {
           props.todos.map((todo: ToDo) => {
            return (<ListItem todo={todo} key={todo.id}/>)
           })
        }
        </div>
    )
}
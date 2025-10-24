import { Link } from "react-router-dom"
import { ToDo } from "../../modules/todo-item"
import classes from "./ListItem.module.scss"
 export const ListItem = ({todo}:{todo: ToDo})=> {
    
    return(
        <>
        
         <Link to={`/list/${todo.id}`}
         target="_blank"
         rel="noreferrer"
         className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}
         >{todo.text}</Link>   

      
        </>    
            
        
        
    )
 }
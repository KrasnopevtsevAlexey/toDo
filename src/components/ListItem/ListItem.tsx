
import { ToDo } from "../../modules/todo-item"
import { Links } from './ListItem.styled'
 export const ListItem = ({todo}:{todo: ToDo})=> {
    
    return(
        <>
        
         <Links to={`/toDo/list/${todo.id}`}
         target="_blank"
         rel="noreferrer"
         $isDone={todo.isDone}
         >{todo.text}
         
         </Links>   

      
        </>    
            
        
        
    )
 }
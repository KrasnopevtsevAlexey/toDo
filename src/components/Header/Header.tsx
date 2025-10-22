import './Header.scss'
import classes from './Header.module.scss'
import { NavLink } from 'react-router-dom'
export const Header = () => {

    const getClassLink = ({isActive}:{isActive: boolean}):string =>{
return isActive ? `${classes.active} ${classes.link}` : classes.link ;
    }
    return(
        <>
         <header className={classes.header}>
        <div className={classes.container}>

            <NavLink className={getClassLink} to="/">Home</NavLink>
            <NavLink className={getClassLink} to="/todo">ToDo</NavLink>
            {/* <a href="/" >Home</a>
             <a href="/todo" >ToDo</a> */}
        </div>
    </header>
        </>
    )
}
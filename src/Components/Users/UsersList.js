import Card from "../UI/Card/Card";
import classes from'./UsersList.module.css';
import Button from "../UI/Button/Button";
import { Fragment } from "react";

const UsersList=props=>{
    if(props.users.length===0){
        return(
            <div>
                <Card className={classes.users}>
                    <h3>Nothing is Present...</h3>
                </Card>
            </div>
        )
    }

    return (
        <Fragment>
            <Card className={classes.users}>
        <ul>
            {props.users.map((user)=>
                (<li key={user.id}>
                    {user.name}  (Seat Number:{user.seatnumber})&nbsp;
                    <Button type='button' onClick={()=>props.onDelete(user.id)} >Delete</Button>&nbsp;
                    <Button type='button' onClick={()=>props.onEdit(user.id,user.name,user.seatnumber)} >Edit</Button>
                </li>)
            )}        
        </ul>  
        </Card>   
        </Fragment>
     );
}

export default UsersList;
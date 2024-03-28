import { useState,useRef,Fragment,useEffect } from "react";
import Card from "../UI/Card/Card";
import classes from './AddUsers.module.css'
import Button from "../UI/Button/Button";

const AddUsers=(props)=>{

    const [enteredUserName,setEnteredUserName]=useState('');
    const [enteredSeatNumber,setEnteredSeatNumber]=useState('');

    const nameInputRef=useRef();
    const seatInputRef=useRef();

    
    useEffect(()=>{
        setEnteredUserName(props.currUsername)
        setEnteredSeatNumber(props.currSeatnumber);
        
    },[props.currUsername,props.currSeatnumber])

    const addUserHandler=(event)=>{
        event.preventDefault();
        
        if(enteredUserName.trim().length===0 || enteredSeatNumber<1){
            return;
        }
        props.onAddUser(enteredUserName,enteredSeatNumber);
        setEnteredUserName('')
        setEnteredSeatNumber('')
        
    }

    const changeUsernameHandler=(event)=>{
        setEnteredUserName(event.target.value);
        
    }

    const changeSeatNumberHandler=(event)=>{
        setEnteredSeatNumber(event.target.value);
        
    }

    

    return (
        <Fragment>
            <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='name'>User Name:</label>
                <input id="name" type="text" value={enteredUserName} onChange={changeUsernameHandler} ref={nameInputRef}></input>
                <label htmlFor='seatno'>Seat Number:</label>
                <input id="seatno" type="number" value={enteredSeatNumber} onChange={changeSeatNumberHandler} ref={seatInputRef}></input>
                <Button type='submit'>Add</Button>
            </form>
            </Card>
        </Fragment>
    );
}

export default AddUsers;
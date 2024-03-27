import { useState } from "react";

const AddUsers=(props)=>{

    const [enteredUserName,setEnteredUserName]=useState('');
    const [enteredSeatNumber,setEnteredSeatNumber]=useState('');

    const addUserHandler=(event)=>{
        event.preventDefault();
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
        <div>
            <form onSubmit={addUserHandler}>
                <label htmlFor='name'>User Name:</label>
                <input id="name" type="text" value={enteredUserName} onChange={changeUsernameHandler}></input>
                <label htmlFor='seatno'>Seat Number:</label>
                <input id="seatno" type="number" value={enteredSeatNumber} onChange={changeSeatNumberHandler}></input>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
}

export default AddUsers;
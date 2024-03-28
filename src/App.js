import { useState,Fragment } from "react";
import AddUsers from "./Components/Users/AddUsers";
import UsersList from "./Components/Users/UsersList";
import TotalBooked from "./Components/Users/TotolBooked";
import FindUsers from "./Components/Users/FindUsers";
import classes from './App.module.css';


const App=()=> {

  const [userList,setUserList]= useState([]);
  const [filteredSlot,setFilteredSlot]= useState('');
  const [editSlotUsername,setEditSoltUsername]=useState('');
  const [editSlotSeatnumber,setEditSoltSeatNumber]=useState('');
  

  const addUserHandler=(uName,uSeat)=>{
    setUserList((prevList)=>{
      for(const obj of userList){
        if(obj.seatnumber===uSeat){
          alert("SEAT ALREADY BOOKED")
          return [...prevList];
        }
      }
      return [...prevList,{name:uName,seatnumber:uSeat,id:Math.random().toString(),status:0}]
    })
  }

  const deleteUserHandler=(deleteUsersId)=>{
    const newUsers = userList.filter((user) => user.id !== deleteUsersId)

    setUserList(newUsers)
  }

  const editUserHandler=(editUsersId,editUsersUsername,editUsersSeatnumber)=>{
    setEditSoltUsername(editUsersUsername)
    setEditSoltSeatNumber(editUsersSeatnumber)
    const newUsers = userList.filter((user) => user.id !== editUsersId)
    setUserList(newUsers)
    
  }


  const slotChangeHandler=(selectedSlot)=>{
    setFilteredSlot(selectedSlot)
  }

  const filteredLists = userList.filter((slot)=>{
    return slot.seatnumber ===filteredSlot;
  })

  const onfilterEmpty = ()=>{
    if(filteredSlot===''){
      return userList;
    }
    else{
      return filteredLists;
    }
  }

  return (
    <Fragment>
      <div className={classes.heading}>
      <h1>Movie Booking</h1>
      </div>
      <TotalBooked users={userList} />
      <FindUsers onChangeFilter={slotChangeHandler} selected={filteredSlot}/>
      <AddUsers onAddUser={addUserHandler} users={userList} currUsername={editSlotUsername} currSeatnumber={editSlotSeatnumber}/>
      <UsersList users={onfilterEmpty()} onDelete={deleteUserHandler} onEdit={editUserHandler}/>
    </Fragment>
  );
}


export default App;

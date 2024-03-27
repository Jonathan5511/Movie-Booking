import { useState } from "react";
import AddUsers from "./Components/Users/AddUsers";
import UsersList from "./Components/Users/UsersList";
import TotalBooked from "./Components/Users/TotolBooked";


const App=()=> {

  const [userList,setUserList]= useState([]);

  const addUserHandler=(uName,uSeat)=>{
    setUserList((prevList)=>{
      return [...prevList,{name:uName,seatnumber:uSeat,id:Math.random().toString(),status:0}]
    })
  }

  const deleteUserHandler=(deleteUsers)=>{
    const newUsers = userList.filter((user) => user.id !== deleteUsers)

    setUserList(newUsers)
  }

  const editUserHandler=(editUsers)=>{
    const newUsers = userList.filter((user) => user.id !== editUsers)
    setUserList(newUsers)
    
    
  }

  return (
    <div>
      <h1>Movie Booking</h1>
      <TotalBooked users={userList} delete={deleteUserHandler} edit={editUserHandler} />
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={userList} onDelete={deleteUserHandler} onEdit={editUserHandler}/>
    </div>
  );
}


export default App;

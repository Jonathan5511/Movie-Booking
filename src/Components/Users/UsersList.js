
const UsersList=props=>{


    return (
        <div>
        <ul>
            {props.users.map((user)=>
                (<li key={user.id}>
                    {user.name} {user.seatnumber}
                    <button type='button' onClick={()=>props.onDelete(user.id)} >Delete</button>
                    <button type='button' onClick={()=>props.onEdit(user.id)} >Edit</button>
                </li>)
            )}        
        </ul>     
        </div>
     );

}

export default UsersList;
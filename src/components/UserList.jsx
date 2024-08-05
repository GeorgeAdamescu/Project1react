import React from 'react';
import UserItem from './UserItem';

    const UserList =({users, modifyArray})=>{
    //const {users, modifyArray}=props;
    const delUser=(index)=>{
        
     //  const newArray = [...this.props.users.slice(0, index), ...this.props.users.slice(index + 1)];
       //this.props.modifyArray(newArray);
         const newArray=users.filter((user)=>user.id!=index);
          modifyArray(newArray);
       console.log(index);
    }
   
    return(
    <div>
        <h2>Lista utilizatori</h2>
     {
   
        users.map((user,index)=>{
         return <UserItem
         name={user.name}
         email={user.email}
         isGoldClient={user.isGoldClient}
         key={index}
         id={user.id}
         delUser={delUser}
         />
         
        })
    }
    </div>
);
    


}
export default UserList;
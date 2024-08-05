import React from 'react';

function UserItem(props){
    const {name, email, isGoldClient, delUser,id}=props;
  
  return (
   <div>
     <p>{name}</p>
      <p>{email}</p>
      {isGoldClient
       ?
       <p>CLIENT GOLD</p>
    :null}
    <p><input type="button" value="sterge user" onClick={()=>delUser(id)}/></p>
   </div>


  );


}

export default UserItem;
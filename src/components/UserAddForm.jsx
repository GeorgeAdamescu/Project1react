import React from 'react';
import './UserAddForm.css';
import { useState } from "react";

const UserAddForm=({updateUserList}) =>{
const [name, setName] = useState('');
 const [email,setEmail]=useState('');
 const [isGoldClient,setIsGoldCLIENT]=useState(false);
    const handleNameChange=(event)=>{
    const inputValue=event.target.value;
    setName(inputValue);
    }
    const handleEmailChange=(event)=>{
        const inputValue=event.target.value;
    setEmail(inputValue);
    }
    const handleIsGoldClientChange=(event)=>{
      console.log(event.target.checked);
        const inputValue=event.target.checked;
    setIsGoldCLIENT(inputValue);
    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        const newUser={
            name:name,
            email:email,
            isGoldClient:isGoldClient
        }
        updateUserList(newUser);
    }

        return(
         <form className="user-add-form" onSubmit={handleFormSubmit}>
            <h2>Adauga utilizator</h2>
            <label htmlform="name">Nume</label>
          <input type="text" name="name" value={name} onChange={handleNameChange}/>
          <label htmlform="email">Email</label>
          <input type="text" name="email" value={email} onChange={handleEmailChange}/>
          <label htmlform="gold-client">E client gold?</label>
          <input type="checkbox" name="gold-client" checked={isGoldClient} onChange={handleIsGoldClientChange}/>
          <input type="submit" value="submite formularul"/>
        </form>
        
        );
    
}
export default UserAddForm;
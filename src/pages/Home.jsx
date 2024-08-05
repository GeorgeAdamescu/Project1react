 import '../App.css';
import React from 'react';
import UserList from '../components/UserList';
import UserAddForm from '../components/UserAddForm';
import { useState } from "react";
import {useEffect} from "react";

import Layout from '../components/Layout';
const Home = () => {

  const [background, setBackground] = useState('purple');
 const [users,setUsers]=useState([]);


 useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json();
  })
  .then((json)=>{
    console.log(json);
     const filteredJson=json.filter(json=>json.id<4);
    
    filteredJson.forEach((user,index)=>{
     user.isGoldClient=true;
    });
   setUsers(filteredJson);
  })
  
},[]);
const handleBackgroundChange=(event)=>{
const userBackground=event.target.value;
console.log(userBackground);
setBackground(userBackground);
}
const updateUserList=(user)=>{

//this.setState({users:[...this.state.users,user
//]});
setUsers([...users, user])
}
const modifyArray =(newArray)=>{
setUsers(newArray);
}

return (
  
<div className="Home" style={{background:background}}>
  <Layout>
  <h1>Lista utilizatori</h1>
  <UserAddForm updateUserList={updateUserList}/>
  {background!=='#000000'
  ? <UserList users={users} modifyArray={modifyArray}/>
  :null
}
  
  <input type="color" onChange={handleBackgroundChange}/>
  </Layout>
</div>

);

}
export default Home;

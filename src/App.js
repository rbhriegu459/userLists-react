import React, { useState } from 'react';
import AddUser from './User/AddUser';
import UsersList from './User/UsersList';

import './App.css';

const App = () => {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge)=>{
    setUsersList( (prevUsersList) => {
      return [...prevUsersList, {name : uName , age : uAge, id: Math.random().toString()}];
    })
  }

  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      <UsersList users ={usersList} />
    </div>
  );
};

export default App;

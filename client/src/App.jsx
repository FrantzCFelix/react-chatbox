import logo from './logo.svg';
import './App.css';
import socket from './socket'
import {useState,useRef,useEffect} from 'react'
import React from 'react'


function App() {


  useEffect(()=>{
    socket.onAny((event, ...args) => {
      console.log(event, args);
    });
  },[])

  const [userName,setUserName] = useState('Frantz');
  const [roomNumber,setRoomNumber] = useState(1);

  const nameRef = useRef(null);
  // const nameRef = React.createRef();
  const roomRef = useRef(null);


  const handleSubmit = (event) =>{
    event.preventDefault(event);

    //console.log(nameRef.current.value);
    console.log(roomRef.current.value);
    socket.auth = { username: nameRef.current.value };
    socket.connect();
    setUserName('');
    setRoomNumber('')
  }

  const onUserNameChange = (event) =>{
    // console.log(event.target.value);
    setUserName(event.target.value)
  }
  const onRoomNameChange = (event) =>{
    setRoomNumber(event.target.value)
  }



  return (
    <div className="App">
     

      <form onSubmit={handleSubmit}>
        <p>Username</p>
    <input ref = {nameRef} onChange ={onUserNameChange} type="text" name="username" id="username" value = {userName}/>
    <br/>
    <p>Room Number</p>
    <input ref = {roomRef} onChange ={onRoomNameChange} type="number" name="chatRoom" id="chatRoom" value = {roomNumber}/>
    <br/>
    <button type="submit">Join here</button>

      </form>



    </div>
  );
}

export default App;

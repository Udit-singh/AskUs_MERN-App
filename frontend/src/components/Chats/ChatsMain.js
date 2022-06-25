import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
  } from "firebase/auth";
  import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';
import { TagsInput } from "react-tag-input-component";
import { selectUser } from "../../feature/userSlice";
import { useSelector } from "react-redux";

  import {getFirestore,query,getDocs,collection, where,addDoc,} from "firebase/firestore";
  import React, { useState } from "react";
  import { useHistory } from "react-router-dom";
  import { auth, provider, db } from "../../firebase";
  import "./chat.css";
  
  const projectID = 'de04ca9e-f078-42d0-a5e3-2278e81cf4eb';

  function ChatsMain() {
    const history = useHistory();


    
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState([]);

  const handleQuill = (value) => {
    setBody(value);
  };

  const handleSubmit = async (e) => {
    history.push("/");
  };

 
    const user = useSelector(selectUser);
 
  
    return (
        <ChatEngine
        height="100vh"
        projectID={projectID}
        userName= "admin"
        userSecret='password'
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />);
  }
  
  export default ChatsMain;
  
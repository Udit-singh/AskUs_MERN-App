import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
  } from "firebase/auth";
  import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import Editor from "react-quill/lib/toolbar";
import axios from "axios";
import { TagsInput } from "react-tag-input-component";
import { selectUser } from "../../feature/userSlice";
import { useSelector } from "react-redux";

  import {getFirestore,query,getDocs,collection, where,addDoc,} from "firebase/firestore";
  import React, { useState } from "react";
  import { useHistory } from "react-router-dom";
  import { auth, provider, db } from "../../firebase";
  import "./UserDetails.css";
  
  
  function UserDetails() {
    const history = useHistory();
    const [register, setRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    
  const [title, setTitle] = useState("");
  const [langugaes, setLangugaes] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState([]);

  const handleQuill = (value) => {
    setBody(value);
  };

  const handleSubmit = async (e) => {
    history.push("/");
    // e.preventDefault();
    // if (title !== "" && body !== "") {
    //   const bodyJSON = {
    //     title: title,
    //     body: body,
    //     tag: JSON.stringify(tag),
    //     user: user,
    //   };
    //   await axios
    //     .post("/api/question", bodyJSON)
    //     .then((res) => {
    //       // console.log(res.data);
    //       alert("Question added successfully");
    //       history.push("/");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
  };

 
    const user = useSelector(selectUser);
    var toolbarOptions = [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
  
      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction
  
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
  
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
  
      ["clean"],
    ];
    Editor.modules = {
      syntax: false,
      toolbar: toolbarOptions,
      clipboard: {
        matchVisual: false,
      },
    };

    Editor.formats = [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
      "video",
    ];
  

  
    return (
      <div className="parent">
         <div className="add-question">
      <div className="add-question-container">
        <div className="head-title">
          <h1>Please fill the data below, For us to serve you better</h1>
        </div>
        <div className="question-container">
          <div className="question-options">
            <div className="question-option">
              <div className="title">
                <h3>Introdution</h3>
                <small>
                It helps us to customise questions according to your skill set
                </small>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="e.g Software Engineer, Musician, or Singer"
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Education</h3>
                <small>
                It helps us to according your level of education
                </small>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="e.g Chitkara University, IIT Bombay, etc"
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Employment</h3>
                <small>
                Add a Company name
                </small>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="e.g Google, Microsoft, or Amazon"
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Topics you know about</h3>
                <small>
                Topics are how AskQ knows what questions to send your way. Be as comprehensive and specific as possible to get the most relevant questions.
                </small>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="e.g Aeronautics, Sports, or Technology"
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Description</h3>
                <small>
                Include a short paragraph about yourself, will identify keywords
                </small>
                <ReactQuill
                  value={body}
                  onChange={handleQuill}
                  modules={Editor.modules}
                  className="react-quill"
                  theme="snow"
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Your Location</h3>
                <small>
                Add a location, where you live
                </small>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="e.g Bangalore, Chandigarh, or Pune"
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Add Language</h3>
                <small>
                  Add your preffered langugaes
                </small>
                <input
                  value={langugaes}
                  onChange={(e) => setLangugaes(e.target.value)}
                  name="fruits"
                  placeHolder="English, Hindi, etc"
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Your Interests - Tags</h3>
                <small>
                  Add up to 5 tags to describe about your interests
                </small>
                <TagsInput
                  value={tag}
                  onChange={setTag}
                  name="fruits"
                  placeHolder="press enter to add new tag"
                />
              </div>
            </div>
            <button onClick={handleSubmit} className="button">
          Save
        </button>
          </div>
        </div>
      </div>
    </div>
      </div>
    );
  }
  
  export default UserDetails;
  
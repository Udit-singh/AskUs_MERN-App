import "./App.css";
import Navbar from './components/Navbar';
import JumbotronContainer from './components/Jumbotron';
import Footer from './components/Footer/footer';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AskUs from "./components/AskUs";
import MainTech from "./feature/TechNews/Main";
import Header from "./components/Header";
import AddQuestion from "./components/AddQuestion";
import ProfileMain from "./components/Profile/ProfileMain";
import UserDatils from "./components/UserDetails/UserDetails";
import ChatsMain from "./components/Chats/ChatsMain";
import ViewQuestion from "./components/ViewQuestion";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./feature/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
      // console.log(authUser);
    });
  }, [dispatch]);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );

  return (

    <div className="App">
      <Router>
        <Navbar />
        <JumbotronContainer/>
        <Switch>
          <Route exact path="/auth" component={Auth} />
          <PrivateRoute exact path="/userDetails" component={UserDatils} />
          <PrivateRoute exact path="/" component={AskUs} />
          <PrivateRoute exact path="/add-question" component={AddQuestion} />
          <PrivateRoute exact path="/question" component={ViewQuestion} />
          <PrivateRoute exact path="/chats" component={ChatsMain} />
          <PrivateRoute exact path="/tech" component={MainTech} />
          <PrivateRoute exact path="/userProfile" component={ProfileMain} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

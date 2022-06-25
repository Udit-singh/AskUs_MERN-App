import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";
import { auth } from "../../firebase";
import { Avatar } from "@material-ui/core";

const Navbar = () => {
    const user = useSelector(selectUser);

    function stringToColor(string) {
        let hash = 0;
        let i;
    
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
    
        let color = "#";
    
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.substr(-2);
        }
        /* eslint-enable no-bitwise */
    
        return color;
      }

    function stringAvatar(name) {
        return {
          sx: {
            bgcolor: name ? stringToColor(name) : "rgba(255,255,255,0.8)",
          },
          children: name && `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
        };
      }

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>AskQ</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Questions
          </NavLink>
          <NavLink to='/userProfile' activeStyle>
            Profile
          </NavLink>
          <NavLink to='/community' activeStyle>
            Community
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
            <div className='avatar'>
            <Avatar
              style={{
                cursor: "pointer",
              }}
              {...stringAvatar(user && user.displayName)}
              onClick={() => auth.signOut()}
            />
            </div>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
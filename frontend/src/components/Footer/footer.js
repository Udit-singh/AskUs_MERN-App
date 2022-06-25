import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white",
                    fontSize: '23px',
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        AskQ: A digital learning & sharing Portal for Students/Professionals
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Questions</Heading>
            <FooterLink href="#">All Questions</FooterLink>
            <FooterLink href="#">Filter Questions</FooterLink>
          </Column>
          <Column>
            <Heading>Profile</Heading>
            <FooterLink href="#">My Profile</FooterLink>
          </Column>
          <Column>
            <Heading>Community</Heading>
            <FooterLink href="#">Technology</FooterLink>
            <FooterLink href="#">Space Tech</FooterLink>
          </Column>
          <Column>
            <Heading>Are you a register user?</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Sign In
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Sign Up
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Log Out
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Help
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <h1 style={{ color: "white",
                    fontSize: '15px',
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Developed By: AskQ Project Team.
      </h1>
    </Box>
  );
};
export default Footer;
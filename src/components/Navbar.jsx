import React from "react";
import styled from "styled-components";
import Hero from "./Hero"
import Who from "./Who"
import Contact from "./Contact";

const Section = styled.div`
  display: flex;
  justify-contetn: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 150px;
  
  
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  color: white;
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Icon = styled.img`
  width: 50px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const a = styled.a`
  color = white;
`;

function gotoLink() {
  window.open("https://www.linkedin.com/in/arda-can-tekk%C3%BCpeli-65289914a/");
};

function gotoPage(page) {
  window.open(page)
}

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logoo2.png" />
          <List>
            <ListItem >Home</ListItem>
            <ListItem> Works </ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Button onClick={gotoLink}>
            Linkedin
          </Button>
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section >
  )
}

export default Navbar

/**
https://www.linkedin.com/in/arda-can-tekk%C3%BCpeli-65289914a/
 */
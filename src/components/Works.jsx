import React, { useState } from "react";
import styled from "styled-components";
import Development from "./Development";
import WebandAppDesign from "./WebandAppDesign";
import Engineering from "./Engineering";
import MachineLearning from "./MachineLearning";

const data = [
  "Development",
  "Web/App Design",
  "Engineering",
  "Machine Learning"
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  background-color: black;
`;

const Container = styled.div`
  color: black;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 85px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  ::after{
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

    &:hover{
      ::after{
        animation: moveText 0.5s linear both;

        @keyframes moveText {
          to{
            width: 100%;
          }
        }
      }
    }
`;



const Works = () => {
  const [work, setWork] = useState("Development")
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}> {item} </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Development" ? (
            <Development />
          ) : work === "Web/App Design" ? (
            <WebandAppDesign />
          ) : work === "Engineering" ? (
            <Engineering />
          ) : (
            <MachineLearning />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;

/*
{ work == "Development" ? (
            <Development />
          ) : work == "Web/App Design" ? (
            <WebandAppDesign />
          ) : work == "Enginnering" ? (
            <Engineering />
          ) : work == "Machine Learning" (
            <MachineLearning/>
          )}
*/
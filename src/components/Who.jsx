import React from "react";
import styled from "styled-components";
import WhoSpace from "./WhoSpace";


const Section = styled.div`
  height: 100vh;
  background-color: black;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content:space-between;
`;

const Left = styled.div`
    flex: 2;
    
`;

const Title = styled.h1`
    font-size:74px;
    color: white;
`;

const Right = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Line = styled.img`
    height:20px;
`;

const SubTitle = styled.h2`
    color: white;
`;

const Desc = styled.p`
    font-size: 24px;
    color: white;
`;

const Button = styled.button`
    background-color: white;
    color: balck;
    font-weight: 500;
    width: 120px;
    padding: 10px;
    border:none;
    border-radius: 5;
    cursor: pointer;
`;

function gotoLink() {
  window.open("https://github.com/ardacantk");
};


const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* 3d model */}
          <WhoSpace/>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <SubTitle>Who I am</SubTitle>
          </WhatWeDo>
          <Desc>A creative designer and developer with a passion for the arts</Desc>
          <Button onClick={gotoLink}>See my works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who;
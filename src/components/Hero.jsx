import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import HeroThink from "./HeroThink"

const Section = styled.div`
  height: 100vh;
  background-color: black;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

const Title = styled.h1`
    font-size:50px;
    color: white;
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
    color: black;
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border:none;
    border-radius: 5;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 3;
    position: relative;
`;


const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Think. Make. Solve.</Title>
                    <WhatWeDo>
                        <SubTitle>What I do</SubTitle>
                    </WhatWeDo>
                    <Desc>I enjoy creating delightful, human-centered digital experiences.</Desc>
                    <Button>Learn More</Button>
                </Left>
                <Right>
                    {/* 3d model */}
                    <HeroThink/>
                </Right>
            </Container>
        </Section>
    )
}

export default Hero;
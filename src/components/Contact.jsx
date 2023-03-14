import React from "react";
import styled from "styled-components";
import ContactWorld from "./ContactWorld"

const Section = styled.div`
  height: 100vh;
  background-color: black;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 200;
  color: white;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: white;
  border: true;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: white;
  border: true;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  border: none
  border-radius: 5px;
  cursor: pointer;
  padding: 12px;
`;

const Right = styled.div`
  flex: 2;
`;


const Contact = () => {
    return(
        <Section>
          <Container>
            <Left>
              <Form>
                <Title>Contact Me</Title>
                <Input placeholder="Name"/>
                <Input placeholder="Email"/>
                <TextArea placeholder="Write your message" rows={10}/>
                <Button type="submit">Send</Button>
              </Form>
            </Left>
            <Right>
              <ContactWorld/>
            </Right>
          </Container>
        </Section>
    )
}

export default Contact
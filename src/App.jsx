import styled from "styled-components"
import Contact from "./components/Contact"
import Who from "./components/Who"
import Hero from "./components/Hero"
import Works from "./components/Works"


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-widt: none;
  color: white;
  backgroung: url("./img/")
  &::-webkit-scrollbar{
    display: none
  }
`;


function App() {
  return (
    <Container>
      <mesh>
        <Hero/>
        <Who/>
        <Works/>
        <Contact/>
      </mesh>
    </Container>
  );
};

export default App;

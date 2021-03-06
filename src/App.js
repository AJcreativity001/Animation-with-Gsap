import "./App.css";
import { Container, Box } from "@chakra-ui/react";
import { gsap } from "gsap";
import React from "react";
import Images from "./hover";
import State from "./state";

const { useRef, useEffect } = React;

function App() {

  const el = useRef();
  const q = gsap.utils.selector(el);

  const handleExpand = ( {currentTarget}) => {
    gsap.to(currentTarget, {width: 150, height: 150})
  }

  const handleShrink = ( {currentTarget} ) => {
    gsap.to(currentTarget, {width: 70, height: 70})
  }

  useEffect(()=> {
    gsap.to(q(".circle"), {duration: 1, x: -30, delay: .05, ease: "expo.out", stagger: .15});
  }, [q])

  return (
    <Box>
      <Container ref={el} marginLeft="50%" marginTop="10%" marginBottom="10%">
        <Box 
          onMouseEnter={handleExpand}
          onMouseLeave={handleShrink}
          className="circle circleYellow"></Box>
        <Box 
          // onClick={state !== true ? handleExpand : handleShrink } 
          onMouseEnter={handleExpand}
          onMouseLeave={handleShrink}
          className="circle circleRed"></Box>
        <Box
          onMouseEnter={handleExpand}
          onMouseLeave={handleShrink} 
          className="circle"></Box>
      </Container>
      <Images />
      <State />
    </Box>
    
    
  );
}

export default App;

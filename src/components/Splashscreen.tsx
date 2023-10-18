import { Container } from "@chakra-ui/react";
import React from "react";
import splashscreen from "../assets/splashscreen.jpg";

const Splashscreen = () => {
  return (
    <Container>
      <img src={splashscreen as string} alt="" />
    </Container>
  );
};

export default Splashscreen;

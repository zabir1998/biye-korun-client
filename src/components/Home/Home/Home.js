import React from "react";
import { Container } from "react-bootstrap";
import Couples from "../Couples/Couples";
import Header from "../Header/Header";
import HeaderForm from "../HeaderForm/HeaderForm";
import NavBar from "../NavBar/NavBar";
import StepSection from "../StepSection/StepSection";

const Home = () => {
  return (
    <Container>
      <NavBar></NavBar>
      <Header></Header>
      <HeaderForm></HeaderForm>
      <StepSection></StepSection>
      <Couples></Couples>
    </Container>
  );
};

export default Home;

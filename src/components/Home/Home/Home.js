import React from "react";
import { Container } from "react-bootstrap";
import CopyRight from "../../CopyRight/CopyRight/CopyRight";
import Couples from "../Couples/Couples";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeaderForm from "../HeaderForm/HeaderForm";
import Icons from "../Icons/Icons";
import Membership from "../Membership/Membership";
import NavBar from "../NavBar/NavBar";
import StepSection from "../StepSection/StepSection";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <Container>
      <NavBar></NavBar>
      <Header></Header>
      <HeaderForm></HeaderForm>
      <StepSection></StepSection>
      <Couples></Couples>
      <Membership></Membership>
      <Icons></Icons>
      <Subscribe></Subscribe>
      <Footer></Footer>
      <CopyRight></CopyRight>
    </Container>
  );
};

export default Home;

import React from "react";
import Header from "../../components/header";
import Info from "../../components/info";
import { Container } from "./styles";

const Profile = () => {
  return (
    <div>
      <Header />
      <hr color="#d3d3d3" />
      <Container>
        <Info />
      </Container>
    </div>
  );
};

export default Profile;

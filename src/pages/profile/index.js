import React from "react";
import Header from "../../components/header";
import Info from "../../components/info";
import { Container } from "./styles";

const Profile = () => {
  return (
    <div>
      <Header />
      <hr />
      <Container>
        <Info />
      </Container>
    </div>
  );
};

export default Profile;

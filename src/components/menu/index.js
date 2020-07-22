import React from "react";
import { Container, FeedMenu, PicturesMenu } from "./styles";
import {
  BsGrid3X3,
  BsDisplay,
  BsBookmark,
  BsPersonSquare,
} from "react-icons/bs";

const Menu = () => {
  return (
    <div>
      <Container>
        <FeedMenu>
          <BsGrid3X3 />
          <p>Publicações</p>
          <BsDisplay />
          <p>IGTV</p>
          <BsBookmark />
          <p>Salvos</p>
          <BsPersonSquare />
          <p>Marcados</p>
        </FeedMenu>
      </Container>
      <PicturesMenu>
        <img src={require("../../media/torre.jpg")} alt="" />
        <img src={require("../../media/dubai.jpg")} alt="" />
        <img src={require("../../media/rioDeJaneiro.jpg")} alt="" />
      </PicturesMenu>
      <PicturesMenu>
        <img src={require("../../media/tajMahal.jpg")} alt="" />
        <img src={require("../../media/cafe.jpg")} alt="" />
        <img src={require("../../media/pisa.jpg")} alt="" />
      </PicturesMenu>
    </div>
  );
};

export default Menu;

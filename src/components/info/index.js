import React from "react";
import {
  Container,
  PerfilImg,
  InfoArea,
  FirstInfoLine,
  GearIcon,
  SecondInfoLine,
  ThirdInfoLine,
  StoriesArea,
} from "./styles";
import { BsGear } from "react-icons/bs";

const Info = () => {
  return (
    <div>
      <Container>
        <PerfilImg>
          <img src={require("../../media/perfil.jpg")} alt="" />
        </PerfilImg>
        <InfoArea>
          <FirstInfoLine>
            <p>RafaelxRaatz</p>

            <button>Editar Perfil</button>
            <GearIcon>
              <BsGear size={25} />
            </GearIcon>
          </FirstInfoLine>

          <SecondInfoLine>
            <h3>6</h3> <p>Publicações</p>
            <h3>1.000</h3> <p> Seguidores</p>
            <h3>200</h3> <p>Seguindo</p>
          </SecondInfoLine>

          <ThirdInfoLine>
            <h3>Rafael Raatz</h3>
            <p>
              Sp - zs <br />
              Professional guitar hero player.
            </p>
          </ThirdInfoLine>
        </InfoArea>
      </Container>
      <StoriesArea>
        <img src={require("../../media/torre.jpg")} alt="" />

        <img src={require("../../media/dubai.jpg")} alt="" />

        <img src={require("../../media/rioDeJaneiro.jpg")} alt="" />
      </StoriesArea>
    </div>
  );
};

export default Info;

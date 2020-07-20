import React from "react";
import {
  Container,
  PerfilImg,
  InfoArea,
  FirstInfoLine,
  GearIcon,
  SecondInfoLine,
} from "./styles";
import { BsGear } from "react-icons/bs";

const Info = () => {
  return (
    <div>
      <Container>
        <PerfilImg>
          <img
            src={require("../../media/perfil.jpg")}
            alt=""
            height="160px"
            width="156px"
          />
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
            <h3>7</h3> <p>Publicações</p>
            <h3>1.000</h3> <p> Seguidores</p>
            <h3>200</h3> <p>Seguindo</p>
          </SecondInfoLine>
        </InfoArea>
      </Container>
    </div>
  );
};

export default Info;

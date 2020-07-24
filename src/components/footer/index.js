import React from "react";
import { Container, TextLink, FooterText } from "./styles";

const Footer = () => {
  return (
    <div>
      <Container>
        <TextLink>
          <p>Sobre</p>
          <p>Ajuda</p>
          <p>Imprensa</p>
          <p>API</p>
          <p>Carreiras</p>
          <p>Privacidade</p>
          <p>Termos</p>
          <p>Localizações</p>
          <p>Contas mais relevantes</p>
          <p>Hashtags</p>
          <p>Idioma</p>
        </TextLink>
      </Container>
      <Container>
        <FooterText>
          <p>&copy; 2020 Instagram do Facebook</p>
        </FooterText>
      </Container>
    </div>
  );
};

export default Footer;

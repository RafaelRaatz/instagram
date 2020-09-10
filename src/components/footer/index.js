import React from "react";
import { Container, TextLink, FooterText } from "./styles";

const Footer = () => {
  return (
    <div>
      <Container>
        <TextLink>
          <ul>
            <li>
              <a href="a">Sobre</a>
            </li>
            <li>
              <a href="a">Ajuda</a>
            </li>
            <li>
              <a href="a">Impresa</a>
            </li>
            <li>
              <a href="a">API</a>
            </li>
            <li>
              <a href="a">Carreira</a>
            </li>
            <li>
              <a href="a">Privacidade</a>
            </li>
            <li>
              <a href="aa">Termos</a>
            </li>
            <li>
              <a href="aa">Localizações</a>
            </li>
            <li>
              <a href="a">Contas mais relevantes</a>
            </li>
            <li>
              <a href="a">Hashtags</a>
            </li>
            <li>
              <a href="a">Idioma</a>
            </li>
          </ul>
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

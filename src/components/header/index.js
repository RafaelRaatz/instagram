import React from "react";
import {
  Container,
  Logo,
  LogoImg,
  LogoWritten,
  FormSearch,
  IconSearch,
  Icons,
  AirplaneIcon,
  CompassIcon,
  HeartIcon,
} from "./styles";
import { FiSearch } from "react-icons/fi";
import { FaRegPaperPlane } from "react-icons/fa";
import { AiOutlineCompass, AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

const Header = () => {
  return (
    <Container>
      <Logo>
        <LogoImg>
          <img
            src={require("../../media/instagram-logo.png")}
            alt=""
            width="25px"
          />
        </LogoImg>

        <LogoWritten>
          <img src={require("../../media/logo.png")} alt="" width="105px" />
        </LogoWritten>
      </Logo>

      <FormSearch>
        <form>
          <IconSearch>
            <FiSearch />
          </IconSearch>
          <input type="text" placeholder="pesquisar" />
        </form>
      </FormSearch>

      <Icons>
        <AirplaneIcon>
          <FaRegPaperPlane size={20} />
        </AirplaneIcon>
        <CompassIcon>
          <AiOutlineCompass size={25} />
        </CompassIcon>
        <HeartIcon>
          <AiOutlineHeart size={25} />
        </HeartIcon>
        <BsPerson size={25} />
      </Icons>
    </Container>
  );
};

export default Header;

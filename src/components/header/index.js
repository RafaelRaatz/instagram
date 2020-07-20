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
  PersonIcon,
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
          <button>
            <img
              src={require("../../media/instagram-logo.png")}
              alt=""
              width="25px"
            />
          </button>
        </LogoImg>

        <LogoWritten>
          <button>
            <img src={require("../../media/logo.png")} alt="" width="105px" />
          </button>
        </LogoWritten>
      </Logo>

      <FormSearch>
        <form>
          <IconSearch>
            <FiSearch />
          </IconSearch>
          <input type="text" placeholder="Pesquisar" />
        </form>
      </FormSearch>

      <Icons>
        <AirplaneIcon>
          <button>
            <FaRegPaperPlane size={20} />
          </button>
        </AirplaneIcon>
        <CompassIcon>
          <button>
            <AiOutlineCompass size={25} />
          </button>
        </CompassIcon>
        <HeartIcon>
          <button>
            <AiOutlineHeart size={25} />
          </button>
        </HeartIcon>
        <PersonIcon>
          <button>
            <BsPerson size={25} />
          </button>
        </PersonIcon>
      </Icons>
    </Container>
  );
};

export default Header;

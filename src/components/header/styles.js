import styled from "styled-components";

export const Container = styled.header`
  width: 950px;
  margin: 0 auto;
  display: flex;
  background-color: white;
  padding: 20px;
`;

export const Logo = styled.header`
  display: flex;
  justify-content: space-between;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const LogoImg = styled.header`
  margin-right: 30px;
`;

export const LogoWritten = styled.header`
  margin-top: 2px;
`;

export const FormSearch = styled.header`
  display: flex;
  margin-left: 200px;
  margin-top: 2px;

  input {
    width: 110%;
    border-radius: 3px;
    border-color: #dcdcdc;
    border-width: 1px;
    font-size: 14px;
    padding: 4px;
    text-align: center;
    background-color: rgba(var(--b3f, 250, 250, 250), 1);
  }
`;

export const IconSearch = styled.header`
  position: absolute;
  color: #b0b0b0;
  margin-top: 6px;
  margin-left: 55px;
`;

export const Icons = styled.header`
  display: flex;
  justify-content: space-between;
  margin-left: 200px;
  margin-top: 2px;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const AirplaneIcon = styled.header`
  margin-right: 20px;
`;

export const CompassIcon = styled.header`
  margin-right: 20px;
`;

export const HeartIcon = styled.header`
  margin-right: 20px;
`;

export const PersonIcon = styled.header`
margin-right`;

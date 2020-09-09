import styled from "styled-components";

export const HeaderBox = styled.header`
  border-bottom: 1px solid #dcdcdc;
`;

export const Container = styled.div`
  width: 950px;
  margin: 0 auto;
  display: flex;
  background-color: white;
  padding: 20px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const LogoImg = styled.div`
  margin-right: 30px;
`;

export const LogoWritten = styled.div`
  margin-top: 2px;
`;

export const FormSearch = styled.form`
  position: relative;
  display: flex;
  margin-left: 200px;
  margin-top: 2px;

  input {
    width: 200px;
    border-radius: 3px;
    border-color: #dcdcdc;
    border-width: 1px;
    font-size: 14px;
    padding: 4px;
    background-color: rgba(var(--b3f, 250, 250, 250), 1);
    padding-left: 25px;
  }
`;

export const IconSearch = styled.div`
  position: absolute;
  color: #b0b0b0;
  left: 5px;
  top: 5px;
`;

export const Icons = styled.div`
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

export const PersonIcon = styled.div`
margin-right`;

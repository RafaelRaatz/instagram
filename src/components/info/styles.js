import styled from "styled-components";

export const Container = styled.div`
  margin-left: 80px;
  margin-top: 60px;
  display: flex;
`;

export const PerfilImg = styled.image`
  margin-right: 30px;
  img {
    border-radius: 50%;
    height: 150px;
    width: 150px;
  }
`;

export const InfoArea = styled.div`
  margin-left: 90px;
`;

export const FirstInfoLine = styled.div`
  display: flex;
  p {
    font-size: 25px;
  }

  button {
    margin-left: 20px;
    height: 30px;
    width: 100px;
    cursor: pointer;
    border-radius: 3px;
    border-color: #dcdcdc;
    border-width: 1px;
    font-size: 14px;
    background-color: rgba(var(--b3f, 250, 250, 250), 1);
  }
`;

export const GearIcon = styled.object`
  margin-left: 15px;
  margin-top: 2px;
`;

export const SecondInfoLine = styled.div`
  display: flex;
  margin-top: 20px;

  p {
    font-size: 17px;
    margin-right: 25px;
  }

  h3 {
    font-size: 17px;
    margin-right: 5px;
  }
`;

export const ThirdInfoLine = styled.div`
  margin-top: 20px;
  p {
    font-size: 17px;
    margin-right: 10px;
  }

  h3 {
    font-size: 17px;
    margin-right: 5px;
  }
`;

export const StoriesArea = styled.div`
  margin-top: 70px;
  display: flex;

  img {
    margin-left: 50px;
    border-radius: 50%;
    height: 80px;
    width: 80px;
  }
`;

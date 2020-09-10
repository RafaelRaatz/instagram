import styled from "styled-components";

export const Container = styled.div`
  width: 950px;
  margin: 0 auto;
  display: flex;
  background-color: white;
  margin-top: 20px;
`;

export const TextLink = styled.div`
  display: inline;

  ul {
    list-style: none;
  }

  li {
    display: inline;
  }

  a {
    margin-right: 22px;
    font-weight: bold;
    color: #00008b;
    font-size: 15px;
  }
`;

export const FooterText = styled.div`
  font-size: 15px;
  margin-bottom: 20px;
  color: #a9a9a9;
  font-weight: bold;
`;

import styled, { createGlobalStyle } from "styled-components";

const GlobalStayle = createGlobalStyle`
body{
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
}
`;
const Title = styled.h1`
  text-align: center;
  color: red;
`;

const SubTitle = styled.h3`
  text-align: center;
  font-family: "Lucida Console";
  color: orange;
`;

const MainImage = styled.img`
  display: block;
  margin: auto;
  width: 50%;
`;

const ListWrapper = styled.div`
  margin: auto;
`;
const CardList = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  height: 30%;
`;

const Card = styled.div`
  margin: 2%;
  background: white;
  border-radius: 10px;
  width: 16%;
  overflow: hidden;

  h3 {
    text-align: center;
    font-family: "Lucida Console";
  }

  p {
    text-align: center;
    font-family: "Lucida Console";
  }

  img {
    border-radius: 5px;
    margin: auto;
    width: 100%;
    height: 150px;
  }
`;

export {
  GlobalStayle,
  Title,
  SubTitle,
  MainImage,
  CardList,
  Card,
  ListWrapper,
};

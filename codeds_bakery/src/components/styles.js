import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";

const GlobalStayle = createGlobalStyle`
body{
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
}
`;
const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;

// const ThemeButton = styled.button`
//   font-size: 1em;
//   margin: 1.25em;
//   padding: 0.25em 1em;
//   border-radius: 3px;
//   background-color: ${(props) => props.theme.mainColor};
//   color: ${(props) => props.theme.mainTextColor};
// `;

const SubTitle = styled.h3`
  text-align: center;
  font-family: "Lucida Console";
  color: ${(props) => props.theme.subTitleColor};
`;

const MainImage = styled.img`
  display: block;
  margin: auto;
  width: 30%;
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

const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

const Card = styled.div`
  margin: 2%;
  background: ${(props) => props.theme.cardsBackground};
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

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-top: 10px;
  width: 70%;
  background-color: white;
  border-radius: 10px;
  padding: 10px;

  h1 {
    text-align: center;
  }
  img {
    width: 40%;
  }

  p {
    text-align: center;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: "pink";

  &.active {
    background-color: "pink";
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
  // ThemeButton,
  SearchBarStyled,
  DetailWrapper,
};

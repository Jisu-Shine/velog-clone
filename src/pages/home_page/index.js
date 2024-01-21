
import React from "react";
import styled from "styled-components";
import { BiSolidMoon } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import Background from "../../components/Background";
import Card from "../../components/Card"
import Body from "../../components/Body"
import CardData from "../../datas/CardData.ts"

const HomePage = () => {

  return (
    <Background>
      <Header>
        <Logo>
          <img src="/logo.svg" alt="Logo" />
        </Logo>
        <HeaderIcons>
          <IconWrapper>
            <BiSolidMoon size="23" color="white" />
          </IconWrapper>
          <IconWrapper>
            <CiSearch size="27" color="white" />
          </IconWrapper>
          <LoginButton>로그인</LoginButton>
        </HeaderIcons>
      </Header>
      <Body>
        <CardGrid>
          {CardData.map((cardData, index) => (
            <Card
              key={index}
              imageUrl={cardData.imageUrl}
              title={cardData.title}
              desc={cardData.desc}
              author={cardData.author}
            />
          ))}
        </CardGrid>
      </Body>
    </Background>
  );
};

const Header = styled.div`
  height: 10vh;
  width: 100%;
  background-color: #121212;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 200px;
  box-sizing: border-box;
`;

const Logo = styled.div`
  img {
    width: 70px; 
    height: 50px;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-right: 25px;
  position: relative;

  svg {
    transition: fill 0.3s ease;
  }

  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border-radius: 50%;
      background-color: #666;
    }

    svg {
      fill: white;
    }
  }
`;

const LoginButton = styled.div`
  background-color: white;
  color: black;
  padding: 6px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
`;

const CardGrid = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-between;
  align-content: space-between;
  grid-gap: 30px;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
  @media (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }

  /* @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  } */
`;

export default HomePage;

// src/components/HomePage.js

import React from "react";
import styled from "styled-components";
import { BiSolidMoon } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

const HomePage = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <img src="/logo.svg" alt="Logo" />
        </Logo>
        <HeaderIcons>
          <IconWrapper>
            <BiSolidMoon size="27" color="white" />
          </IconWrapper>
          <IconWrapper>
            <CiSearch size="27" color="white" />
          </IconWrapper>
          <LoginButton>로그인</LoginButton>
        </HeaderIcons>
      </Header>
      <div className="바디"></div>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-color: #121212;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  height: 10vh;
  width: 100vw;
  background-color: #121212;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

const Logo = styled.div`
  img {
    width: 100px; 
    height: 50px;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-right: 20px;
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
  padding: 5px 10px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
`;

export default HomePage;

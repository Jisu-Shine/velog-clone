import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom'; 
import { BiSolidMoon } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { GoTriangleDown } from "react-icons/go";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [view, setView] = useState(false);

  const handleLogoButtonClick = () => {
    navigate('/');
  };

  const handleWriteButtonClick = () => {
    navigate('/write');
  };

  const handleMyPageButtonClick = () => {
    navigate('/mypage');
  };

  const handleLogoutButtonClick = () => {
    //로그아웃
  };
    return (
      <Background>
        <Logo onClick={handleLogoButtonClick}>
        {location.pathname === '/' ?
          <img src="/logo.svg" alt="Logo" /> :
          <UserLog>
            <HomeLogo>
              J
            </HomeLogo>
            shinjisu.log
          </UserLog>
        }
      </Logo>
        <HeaderIcons>
        <IconWrapper>
            <BiSolidMoon size="23" color="white" />
          </IconWrapper>
          <IconWrapper>
            <CiSearch size="27" color="white" />
          </IconWrapper>
          <WriteBTN onClick={handleWriteButtonClick}>새 글 작성</WriteBTN>
          <MyPageBNT onClick={() => {setView(!view)}}>
            <Profile/>
            <GoTriangleDown size="20" color="#ECECEC" />
            {view && (
              <StyledDropdown>
                <li onClick={handleMyPageButtonClick}>내 벨로그</li>
                <li onClick={handleLogoutButtonClick}>로그아웃</li>
              </StyledDropdown>
            )}
          </MyPageBNT>
        </HeaderIcons>
      </Background>
    );
};
const HomeLogo = styled.div`
  display: flex;
  justify-content: center;
  width:30px;
  height: 30px;
  color: black;
  background-color: white;
  border-radius: 10%;
  margin-right: 16px;
`;

const UserLog = styled.div`
  display: flex;
  color: white;
  font-weight: 800;
  font-size: x-large;
`;

const StyledDropdown = styled.div`
  size: 30px;
  width: 12vw;
  color: white;
  display: flex;
  flex-direction: column;
  position: absolute; 
  top: 60px; 
  right: 10px;
  background-color: #1E1E1E;
  overflow: hidden;
  font-weight: 600;
  cursor: pointer;

  li {
    padding: 20px 25px;
    list-style: none;
    &:hover {
      color: #96F2D6;
    }
  }
`;

const Background = styled.div`
  height: 10vh;
  width: 100%;
  background-color: transparent;
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
  cursor: pointer;
`;

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  padding : 10px;

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
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      border-radius: 50%;
      background-color: rgba(102, 102, 102, 0.2);
    }

    svg {
      fill: white;
    }
  }
`;

const WriteBTN = styled.div`
  border: 2px solid white;
  color: white;
  padding: 6px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  background-color: transparent;
  margin-right: 20px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const MyPageBNT = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;   
  position: relative; // 이 부분 추가
  height: 50px; // 높이 값을 수정
`;

const Profile = styled.div`
  width: 50px;      
  height: 50px;    
  border-radius: 50%;
  margin-right: 10px;
  background-size: cover;
  background-position: center;
  background-image: url('https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMTY0/MDAxNjA0MjI4ODc1MDgx.20zY0e0fjnqLYvyFxN2FuZl75yr0p-lejDrTdLzRargg.aDqPo9fsnwOujN45rK3vW-dUi2usn0wBwQE8xmstEBUg.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%EA%B0%88%EC%83%89.jpg?type=w400');
`;


export default Header;


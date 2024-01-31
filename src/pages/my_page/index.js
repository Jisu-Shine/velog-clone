import styled from "styled-components";
import Background from "../../components/Background";
import Header from "../../components/Header";
import React, { useState } from "react";
import Body from "../../components/Body";
import Card from "../../components/Card"
import CardData from "../../datas/CardData.ts"

const MyPage = () => {
  return (
      <Background>
        <Header/>
        <Body>
          <CenterBody>
            <Profile>
              <Image/>
              <Name>
                jisu
              </Name>
            </Profile>
            <div>--------</div>
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
          </CenterBody>
          
        </Body>
      </Background>
  );
};

const Profile = styled.div`
  display: flex;
  align-items: center; // 세로 중앙 정렬
  margin-top: 10vh; // 상단 여백 추가
  margin-left: 5vw;
  margin-bottom: 20px;
`;

const Image = styled.div`
  width: 130px;      
  height: 130px;
  border-radius: 50%;
  margin-right: 20px; // 이미지와 이름 사이 간격
  background-size: cover;
  background-position: center;
  background-image: url('https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMTY0/MDAxNjA0MjI4ODc1MDgx.20zY0e0fjnqLYvyFxN2FuZl75yr0p-lejDrTdLzRargg.aDqPo9fsnwOujN45rK3vW-dUi2usn0wBwQE8xmstEBUg.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%EA%B0%88%EC%83%89.jpg?type=w400');
`;

const Name = styled.div`
  color: white;
  font-weight: bold;
  font-size: 24px; // 폰트 크기 조절
`;

const CenterBody = styled.div`
  margin-left: 5%;
  display: flex;
  /* justify-content: center; */
  align-items: start;
  width: 80%;
  height: 100%;
`;

const CardGrid = styled.div`
  width: 100%;
  display: flex; // 변경: flex 레이아웃 사용
  flex-direction: column; // 변경: 카드를 세로로 나열
  gap: 30px; // 변경: 카드 간의 간격
`;

export default MyPage;



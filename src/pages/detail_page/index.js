import styled from "styled-components";
import Background from "../../components/Background";
import Header from "../../components/Header";
import React, { useState } from "react";
import Body from "../../components/Body";
import CardData from "../../datas/CardData.ts"

const DetailPage = () => {
  return (
      <Background>
        <Header/>
        <Body>
          <CenterBody>
            <Title>
              { CardData[1].title }
            </Title>
            <AuthorContainer>
              <Author>
                { CardData[1].author }
              </Author>
              <Dot/>
              <Date>
                { CardData[1].date }
              </Date>
            </AuthorContainer>
            <Content>
                { CardData[1].desc}
              </Content>
          </CenterBody>
          
        </Body>
      </Background>
  );
};

const Title = styled.div`
  color: white;
  font-size: 50px;
  font-weight: bold;
  align-items: start;
  margin: 10vh 5vh 0px 0px;
`;

const AuthorContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 5vh 0px;
`;

const Author = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 800;
  align-items: start;
`;

const Dot = styled.div`
  background-color: white;
  width: 2px;
  height: 2px;
  border-radius: 100%;
  justify-content: center;
  margin: 10px;
`;

const Date = styled.div`
  color: white;
  font-size: 18px;
`;

const Content = styled.div`
  color: white;
  font-size: 18px;
  align-items: start;
  margin: 5px;
  line-height: 2;
`;
const CenterBody = styled.div`
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
`;

export default DetailPage;



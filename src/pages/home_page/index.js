
import React from "react";  
import styled from "styled-components";
import Background from "../../components/Background";
import Header from "../../components/Header";
import Card from "../../components/Card"
import Body from "../../components/Body"
import CardData from "../../datas/CardData.ts"
import { useNavigate, useLocation } from 'react-router-dom'; 


const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCardClick = () => {
    navigate('/detail');
  };

  return (
    <Background>
      <Header/>
      <Body>
        <CardGrid>
          {CardData.map((cardData, index) => (
            <div onClick={handleCardClick}>
              <Card 
                key={index}
                imageUrl={cardData.imageUrl}
                title={cardData.title}
                desc={cardData.desc}
                date={cardData.date}
                author={cardData.author}
              />
            </div>
              
          ))}
        </CardGrid>
      </Body>
    </Background>
  );
};
const CardGrid = styled.div`
  margin-top: 50%;
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

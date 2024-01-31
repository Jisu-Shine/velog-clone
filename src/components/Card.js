import React from 'react';
import styled from 'styled-components';

const Card = ({ imageUrl, title, desc, author, date, isMyPage }) => {
  return (
    <CardContainer isMyPage={isMyPage}>
      <CardImage src={imageUrl} alt="Card" />
      <CardContent isMyPage={isMyPage}>
        <CardTitle>{title}</CardTitle>
        <CardDesc>{desc}</CardDesc>
        <CardDate isMyPage={isMyPage}>{date}</CardDate>
      </CardContent>
      <Div />
      {!isMyPage && ( 
        <AuthorContainer>
          <By>by <CardAuthor>{author}</CardAuthor></By>
        </AuthorContainer>
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  overflow: hidden;
  display: block;
  margin: 2px;

  ${props => !props.isMyPage && `
    &:hover {
      transform: translateY(-7px);
      transition: transform 0.7s ease;
    }
  `}; 
`;


const CardImage = styled.img`
  display: absolute;
  height: 45%;
  width: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  height: 45%;
  width: 100%;
  object-fit: cover;
  background-color: ${props => props.isMyPage ? 'transparent' : '#1B1C1C'};
`;

const CardTitle = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  padding: 16px 16px;
`;

const CardDesc = styled.div`
  color: white;
  font-size: 16px;
  padding-bottom: 30px;
  padding-left: 16px;
  padding-right: 16px;
`;

const CardDate = styled.div`
  position: absolute;
  bottom: ${props => props.isMyPage ? '0px' : '48px'};
  color: #ACACAC;
  font-size: 14px;
  margin-bottom: 2px;
  padding: 2px 16px;
  width: calc(100% - 32px);

`;

const Div = styled.div`
  height: 1px;
  width: 100%;
  background-color: #2A2A2A;
`;

const AuthorContainer = styled.div`
  width: 100%;
  height: 10%;
  background-color: #1B1C1C;
  padding-left: 16px;
  justify-content: left;
`;
const By = styled.div`
  color: gray;
  font-size: 12px;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const CardAuthor = styled.div`
  color: white;
  font-size: 14px;
  font-weight: bold;
  align-items: center;
  padding: 5px;
`;

export default Card;

import styled from 'styled-components';

const Welcome = styled.div`
  background-color: #333;
  width: 80%;
  height: 100vh;
  margin: 0 auto;
`;

const WelTitle = styled.h1`
  padding-top: 30px;
  color:white;
`;

const MainText = styled.p`
  color:white;
`;

const FormDiv = styled.div`
  padding:20px;
  width:40%;
  margin: 0 auto;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items:center;
`;

export {
  Welcome,
  WelTitle,
  MainText,
  FormDiv
}
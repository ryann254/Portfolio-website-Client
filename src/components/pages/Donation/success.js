import styled from "styled-components";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
const Container = styled.div`
  width: 300px;
  margin: 90px auto 0 auto;
  text-align: center;
  color: #333;

  @media all and (min-width: 411px) {
    margin-top: 110px;
  }

  @media all and (min-width: 768px) {
    margin-top: 120px;
  }

  @media all and (min-width: 1440px) {
    margin-top: 170px;
  }

  @media all and (min-width: 1440px) {
    margin-top: 185px;
  }
`;

const Title = styled.div`
  font-size: 58px;
`;

const Message = styled.div`
  margin-top: 40px;
`;

export default function SuccessPage() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 100);
  });

  return (
    <>
      <Container>
        <Confetti width={width} height={height} numberOfPieces={450} />
        <Title>congrats!</Title>
        <Message>Stripe has successfully processed your payment</Message>
      </Container>  
    </>
      );
};

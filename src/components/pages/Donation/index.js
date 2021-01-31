import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const ContainerFrame = styled.div`
  margin-top: 100px;
`

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

const stripePromise = loadStripe('pk_test_51HWJt8DnpHPxB6GWCJgSUeP5okYIZ0zvYMtD02smALOGeNSECOFxkx6O9Ts9OFXQXOVjuLAXDfTep9fb7BaFzNJ4000PspTqPk');

function index() {
  const handleClick = async(event) => {
    const stripe = await stripePromise

    const response = await fetch('http://localhost:4242/create-checkout-session', {method: 'POST'})

    const session = await response.json()

    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    })

    if (result.error) {
      console.log(result.error.message)
    }
  }

  return ( 
  <ContainerFrame>
    <Container>
      <Row>
        <Col>
          <button type="button" role="link" onClick={handleClick}>
            Checkout
          </button>
        </Col>
      </Row>
    </Container>
  </ContainerFrame>

  )};

export default index;
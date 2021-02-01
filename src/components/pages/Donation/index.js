import React, {useState} from 'react';
import styled from 'styled-components'
import {loadStripe} from '@stripe/stripe-js'
import {Elements, CardElement} from '@stripe/react-stripe-js'

//Own Components
import Row from './prebuilt/Row'
import BillingDetailsFields from './prebuilt/BillingDetailsFields'
import CheckoutError from "./prebuilt/CheckoutError";
import SubmitButton from "./prebuilt/SubmitButton";

const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY)

const ContainerFrame = styled.div`
  font-size: 18px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  padding-top: 85px;
  padding-bottom: 30px;
  input,
  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    border-style: none;
  }

  @media all and (min-width: 411px) {
    padding-top: 115px;
  }

  @media all and (min-width: 768px) {
    padding-top: 135px;
  }

  @media all and (min-width: 1200px) {
    padding-top: 145px;
  }

  @media all and (min-width: 1440px) {
    padding-top: 195px;
  }
`

const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;

  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;

function CheckoutForm() {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  const handleFormSubmit = async ev => {
    ev.preventDefault();

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      address: {
        city: ev.target.city.value,
        line1: ev.target.address.value,
        state: ev.target.state.value,
        postal_code: ev.target.zip.value
      },
      price: ev.target.price.value
    };
  };
  return ( 
    <ContainerFrame>
      <Elements stripe={stripePromise}>
        <form onSubmit={handleFormSubmit}>
          <Row>
            <BillingDetailsFields />
          </Row>
          <Row>
            <CardElementContainer>
              <CardElement />
            </CardElementContainer>
          </Row>
          {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
          <Row>
            <SubmitButton disabled={isProcessing}>
              {isProcessing ? "Processing..." : `Pay`}
            </SubmitButton>
          </Row>
        </form>
      </Elements>
    </ContainerFrame>
  )};

export default CheckoutForm;
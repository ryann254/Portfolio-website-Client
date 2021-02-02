import React, {useState} from 'react';
import styled from 'styled-components'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from 'axios'

//Own Components
import Row from './prebuilt/Row'
import BillingDetailsFields from './prebuilt/BillingDetailsFields'
import CheckoutError from "./prebuilt/CheckoutError";
import SubmitButton from "./prebuilt/SubmitButton";


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

function CheckoutForm({history}) {
  const [isProcessing, setProcessing] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  const stripe = useStripe()
  const elements = useElements()

  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

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
      price: ev.target.amount.value
    };

    setProcessing(true)

    const cardElement = elements.getElement(CardElement)

    try {
      const { data: clientSecret } = await axios.post("http://localhost:4242/api/payment_intents", {
        amount: parseInt(billingDetails.price, 10) * 100
      })
  
      //So that the price does not get sent along with the data
      delete billingDetails.price
  
      const paymentMethodReq = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: billingDetails
      })

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message)
        setProcessing(false)
        return;
      }

      const {error} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id
      })

      if (error) {
        setCheckoutError(error.message)
        setProcessing(false)
        return;
      }

    history.push("/success")

    } catch (error) {
      setCheckoutError(error.message)
    }
  };


  const cardElementOptions = {
    hidePostalCode: true
  }
  return ( 
    <ContainerFrame>
        <form onSubmit={handleFormSubmit}>
          <Row>
            <BillingDetailsFields />
          </Row>
          <Row>
            <CardElementContainer>
              <CardElement options={cardElementOptions} onChange={handleCardDetailsChange}/>
            </CardElementContainer>
          </Row>
          {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
          <Row>
            <SubmitButton disabled={isProcessing}>
              {isProcessing ? "Processing...." : `Donate`}
            </SubmitButton>
          </Row>
        </form>
    </ContainerFrame>
  )};

export default CheckoutForm;
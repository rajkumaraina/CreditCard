import {useState} from 'react'

import {
  MainContainer,
  First,
  Second,
  Heading,
  Shadow,
  Number,
  Name,
  Card,
  Holder,
  SecondHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const nameChange = event => setName(event.target.value)
  const numberChange = event => setNumber(event.target.value)
  return (
    <MainContainer>
      <First>
        <Heading>CREDIT CARD</Heading>
        <Card data-testid="creditCard">
          <Number>{number}</Number>
          <Holder>CARDHOLDER NAME</Holder>
          <Name>{name}</Name>
        </Card>
      </First>
      <Second>
        <Shadow>
          <SecondHeading>Payment Method</SecondHeading>
          <Input
            placeholder="Card Number"
            onChange={numberChange}
            type="text"
          />
          <br />
          <Input
            placeholder="Cardholder Name"
            onChange={nameChange}
            type="text"
          />
        </Shadow>
      </Second>
    </MainContainer>
  )
}
export default CreditCard

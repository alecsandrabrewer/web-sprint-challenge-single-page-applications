import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import OrderForm from './OrderForm';

// Styling 
const DivStyled1 = styled.div `
  display:flex;
  background: maroon;
  justify-content:center;
`
const Header = styled.h1`
  font-size:3rem;
  color: white;
`
const NavLinks = styled.div`
  border:2px solid black;
  background:white;
  padding: 2%;
  margin: 0% 0% 5%;
  display:flex;
  justify-content: center;
  justify-content: space-evenly;
`
const DivStyled2 = styled.div`
  padding: 3%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #C0BDB5;
`

// Form 

const initialFormValues = {
  //text input
  name: '',
  //dropdown
  size: '',
  //radio button
  sauce: '',
  //checkboxes
  cheese: false,
  pepperoni: false,
  sausage: false, 
  mushrooms: false, 
  bacon: false, 
  //text input
  instructions: '',
}


const App = () => {
  const [pizzaOrder, setPizzaOrder] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  //update and submit handlers
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }
  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      toppings: ['cheese', 'pepperoni', 'sausage', 'mushrooms', 'onions', 'bacon'].filter(toppings => formValues[toppings]),
      instructions: formValues.instructions.trim()
    }
  }

  return (
    <div>
      <DivStyled1>
        <nav>
          <Header>Lambda Eats</Header> 
          <NavLinks>
            <Link to='/'>Home</Link>
            <Link to='/pizza'>Order Pizza</Link>
          </NavLinks> 
          <Switch>
            <Route exact path='/'/>
          </Switch>
        </nav>
      </DivStyled1>
      <DivStyled2>
        <h2> Build Your Own Pizza!</h2>
        <OrderForm
          values = {formValues}
          update = {updateForm}
          submit = {submitForm}
        />
      </DivStyled2>
    </div>
  );
};
export default App;

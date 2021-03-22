import React, { useState } from 'react';
import styled from 'styled-components';

//styling
const FormStyled = styled.form`
    display:flex;
    flex-direction:column;
    padding: 2%;
`
const LabelStyled = styled.label`
    margin: 3%;
    font-size:1.2rem;
    display:flex;
    flex-direction: column;
`
const RowStyled = styled.label` 
    display:flex;
    justify-content:center;
`
const ButtonStyled = styled.div `
    width: 50%;
    margin: 5% auto;

`
//////////////////////////////////////////////

const OrderForm = (props) => {
    const {values, submit, update} = props;

    const onChange = evt => {
        const {name, value, checked, type} = evt.target
        const val = type === 'checkbox' ? checked : value
        update (name, val)
        
    }
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <FormStyled className='form-container' onSubmit={onSubmit}>
            <LabelStyled>Your Name:
                <input type='text' value={values.name} placeholder='Full Name' name='name' maxLength='30' onChange={onChange}/>
            </LabelStyled>
            <LabelStyled>Size:
                <select name='size' onChange={onChange} value={values.size}>
                    <option>Personal</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </LabelStyled>
            <h3>Choose Your Sauce!</h3>
            <RowStyled>Red sauce
                <input type='radio' name='sauce' onChange={onChange} value='redSauce' checked={values.sauce === 'redSauce'}/>
            </RowStyled>
            <RowStyled>White Sauce
                <input type='radio' name='sauce' onChange={onChange} value='whiteSauce' checked={values.sauce === 'whiteSauce'}/>
            </RowStyled>
            <h3>Select Your Toppings!</h3>
            <RowStyled>Cheese
                <input type='checkbox' name='cheese' onChange={onChange} value={values.cheese}/>
            </RowStyled>
            <RowStyled>Pepperoni
                <input type='checkbox' name='pepperoni' onChange={onChange} value={values.pepperoni}/>
            </RowStyled>
            <RowStyled>Sausage
                <input type='checkbox' name='sausage' onChange={onChange} value={values.sausage}/>
             </RowStyled>
            <RowStyled>Mushrooms
                <input type='checkbox' name='mushrooms' onChange={onChange} value={values.mushrooms}/>
            </RowStyled>
            <RowStyled>Bacon
                <input type='checkbox' name='bacon' onChange={onChange} value={values.bacon}/>
            </RowStyled>
            <LabelStyled>
                <h3>Special Instructions:</h3>
                <input type='text' value={values.instructions} placeholder='type here' name='instructions' maxLength='60' onChange={onChange}/> 
            </LabelStyled>
            <ButtonStyled>
                <button>PLACE ORDER</button>
            </ButtonStyled>

            
        </FormStyled>
    )
}

export default OrderForm;
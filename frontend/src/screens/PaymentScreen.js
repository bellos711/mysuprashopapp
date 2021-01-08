//can add payment methods
import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
import CheckoutSteps from '../components/CheckoutSteps'
import FormContainer from '../components/FormContainer'
import {savePaymentMethod} from '../actions/cartActions'


const PaymentScreen = ({history}) => {
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    //if no shipping address go back to shipping
    if(!shippingAddress){
        history.push('/shipping')
    }

    //default payment method is paypal
    const [paymentMethod, setPaymentMethod] = useState('PayPal')
    

    const dispatch = useDispatch()


    const submitHandler = (e) => {
        e.preventDefault()

        //dispatch payment method
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>
                        Select Payment Method
                    </Form.Label>
                
                    <Col>
                        <Form.Check 
                        type='radio' 
                        label='PayPal or Credit Card' 
                        id='PayPal' 
                        name='paymentMethod' 
                        value='PayPal' 
                        checked 
                        onChange={(e)=>setPaymentMethod(e.target.value)}>
                        </Form.Check>

                        {/*for stripe*/}
                        {/* <Form.Check 
                        type='radio' 
                        label='Stripe' 
                        id='Stripe' 
                        name='paymentMethod' 
                        value='Stripe'  
                        onChange={(e)=>setPaymentMethod(e.target.value)}>
                        </Form.Check> */}
                    </Col>
                </Form.Group>

                <Button type='submit' variant='primary'>Next</Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen

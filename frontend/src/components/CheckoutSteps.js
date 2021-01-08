import React from 'react'
import {Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const CheckoutSteps = ({step1, step2, step3, step4}) => {
    return (
        <Nav className='mb-4 justify-content-center '>
            <Nav.Item>
                {step1 
                ? (
                    <LinkContainer to='/login'>
                        <Nav.Link>
                            Sign In{' '} 
                            <i class="fas fa-angle-double-right"></i>
                        </Nav.Link>
                    </LinkContainer>
                )
                : (<Nav.Link disabled>Sign In{' '} 
                <i class="fas fa-angle-double-right"></i>
                </Nav.Link>)
                }
            </Nav.Item>

            <Nav.Item>
                {step2 
                ? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link>
                            Shipping{' '}
                            <i class="fas fa-angle-double-right"></i>
                        </Nav.Link>
                    </LinkContainer>
                )
                : (<Nav.Link disabled>
                    Shipping{' '}
                    <i class="fas fa-angle-double-right"></i>
                </Nav.Link>)
                }
            </Nav.Item>

            <Nav.Item>
                {step3 
                ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link>
                            Payment{' '}
                            <i class="fas fa-angle-double-right"></i>
                        </Nav.Link>
                    </LinkContainer>
                )
                : (<Nav.Link disabled>
                    Payment{' '}
                    <i class="fas fa-angle-double-right"></i>
                </Nav.Link>)
                }
            </Nav.Item>

            <Nav.Item>
                {step4 
                ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link>Place Order</Nav.Link>
                    </LinkContainer>
                )
                : (<Nav.Link disabled>Place Order</Nav.Link>)
                }
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps

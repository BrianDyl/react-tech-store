import React, { Component } from 'react'
import styled from 'styled-components'
import {FaDolly, FaRedo, FaDollarSign} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
                id: 1,
                icon: <FaDolly/>,
                title: 'free shipping',
                text: 'Free shipping on orders over $100.00 within the continental United States. For shipping outside the United States request a quote.'

            },
            {
                id: 2,
                icon: <FaRedo/>,
                title: '30 day return policy',
                text: 'If for any reson you are not completely satisfied with your purchase return within 30 days of purchase for a full refund.'

            },
            {
                id: 3,
                icon: <FaDollarSign/>,
                title: 'secured payment',
                text: 'We take precautions to secure your account. When signed in your signed into a secure server connections (https://).'
            }
        ]
    };
    render() {
        return (
            <ServicesWrapper className="py-5">
                <div className="container">
                    <div className="row">
                        {this.state.services.map(item=>{
                            return(
                                <div className="col-10 mx-auto col-sm-6 col-md-4  text-center my-3" key={item.id}>
                                    <div className="service-icon">{item.icon}</div>
                                    <div className="mt-3 text-capitalize">{item.title}</div>
                                    <div className="mt-3">{item.text}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </ServicesWrapper>
        )
    }
}
const ServicesWrapper = styled.section`
background: rgba(95,183,235, 0.5);
.service-icon{
    font-size: 2.5rem;
    color: var(--primaryColor);  
}
p{
    color: var(--darkGrey);
}
`
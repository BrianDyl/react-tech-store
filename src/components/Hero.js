import React from 'react'
import styled from 'styled-components';
import mainBcg from '../images/mainBcg.jpeg';

export default function Hero({img, title, max, children}) {
    return(
        <HeroWrapper max={max} img={img}>
            <div className="banner">
                <h1 className="title">{title}</h1>
                {children}
            </div>
        </HeroWrapper>
    );
}

const HeroWrapper = styled.div`
    min-height: ${props => (props.max? "100vh" : "60vh")};
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: var(--mainWhite);
    background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)), url(${props => props.img});
    background-size:  cover;
    background-position: center;
    .title{
        padding-top: 2rem;
        font-size: 3.4rem;
        text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
        text-transform: uppercase;
        letter-spacing: var(--mainSpacing);
    }
`;

Hero.defaultProps = {
    img: mainBcg
};
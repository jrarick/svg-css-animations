import React, { useEffect } from 'react';
import { navigate } from 'hookrouter';
import gsap from 'gsap';
import styled from 'styled-components';

import coffee from '../assets/coffee.mp4';

const Container = styled.div`
    margin: 0;
    padding: 0;
`;

const CoffeeVideo = styled.video`
    height: 100vh;
`;

const Rectangle = styled.rect`
    fill: white;
    mask: url(#mask);
`;

const CoffeeText = styled.svg`
    overflow: visible;
    font-size: 20vw;
    font-family: 'Roboto Mono', monospace;
    font-weight: bold;
    text-transform: lowercase;

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
`;

export default function CssMask() {
    useEffect(() => {
        const tl = gsap.timeline({ onComplete: () => {
            navigate('/clickme');
        } });
        tl.to("#coffeeText", { delay: 7, duration: 1, fontSize: '0.1vw' });
    }, []);

    return (
        <Container>
            <CoffeeVideo autoPlay playsinline muted loop preload>
                <source src={coffee} />
            </CoffeeVideo>
            <CoffeeText width="100%" height="100%" id="coffeeText">
                <defs>
                    <mask id="mask" x="0" y="0" width="100%" height="100%">
                        <Rectangle x="0" y="0" width="100%" height="100%" />
                        <text x="50%" y="50%" textAnchor="middle">Beans</text>
                    </mask>
                </defs>
                <Rectangle x="0" y="0" width="100%" height="100%" />
            </CoffeeText>
        </Container>
    );
}
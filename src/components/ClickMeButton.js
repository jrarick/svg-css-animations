import React, { useState } from 'react';
import { navigate } from 'hookrouter';
import gsap from 'gsap';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    color: white;
    background: blue;
    margin: 25px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    font-family: 'Roboto Mono', monospace;
    font-weight: bold;
    top: 0;
    left: 0;

    &:hover {
        cursor: pointer;
    }
`;



export default function ClickMeButton() {
    const [counter, setCounter] = useState(0);
    
    function isEven(num) {
        return (num & 1) ? 500 : -500;
    }

    function scatter() {
        setCounter(counter + 1);
        if (counter <= 8) {
            gsap.to("#button", { duration: 0.2, x: Math.random()*isEven(counter), y: Math.random()*500 });
        }
        return;
    }

    return (
        <Container>
            <Button
                id="button"
                onClick={() => {navigate('/')}}
                onMouseEnter={scatter}
            >Click Me!</Button>
        </Container>
    );
}
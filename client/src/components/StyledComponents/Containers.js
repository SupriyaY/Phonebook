import React from 'react';
import styled from 'styled-components';
import Home from './img/homesplash.jpg';


export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex: 1 0 auto; */
    `
export const HomeContainer = Container.extend`
background:linear-gradient(0deg, rgba(36,35,37,0.6), rgba(36,35,37,0.6)), url(${Home}) center no-repeat;
background-size: cover;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
align-items: center;
`





export default{
Container,
HomeContainer


}
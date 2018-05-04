import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {HomeContainer} from './StyledComponents/Containers';

//Styled Components
// const Button = styled.button` 
// color: red;
// font-size: 1em;
// margin: 1em;
// padding: 0.25em 1em;
// border: 2px solid red;
// border-radius: 3px;
// `;



class Homepage extends Component {
    render() {
        return (


            <div>
                <HomeContainer>
 
<div>
                   <Link to="/Users" style={{ textDecoration: 'none' }}>Users</Link>
                </div>
</HomeContainer>
            </div>


        )
    }


}

export default Homepage;
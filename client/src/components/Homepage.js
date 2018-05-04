import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {HomeContainer} from './StyledComponents/Containers'


class Homepage extends Component {
    render() {
        return (


            <div>
                <HomeContainer>
                Hello from the homepage!
 
<div>
                    <Link to="/Users" style={{ textDecoration: 'none' }}>Users</Link>
                </div>
</HomeContainer>
            </div>


        )
    }


}

export default Homepage
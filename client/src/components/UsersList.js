import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import styled from "styled-components";


//Styled Components
const UserCard = styled.div`
top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 10px;
    min-width: 30vh;
    min-height: 20vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid white;
 box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    z-index: 999;
`;


const UserPicture = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 10px;
padding: 10px;
img {
 height: 170px;
 width: 175px;
/* border-radius: 50%; */
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
&:hover{
opacity: 0.8;
position: relative;
top: -20px;
}
`;




















class UsersList extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentWillMount() {
        this.grabUsers();
    }

    grabUsers = async () => {
        try {
            const res = await axios.get('/api/users');
            await this.setState({ users: res.data })
            return res.data
        }
        catch (err) {
            console.log(err)
            await this.setState({ error: err.message })
            return err.message
        }
    };
    render() {

        if (this.state.error) {
            return <div>{this.state.error}</div>
        }

        return (
      
    <div>
                <div>
                    <div>
                        <h1>Users</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <div>

                            <div>
                                {this.state.users.map(user =>
                                    <div>
                                        <div>
                                            <div>
                                                <div key={user.id}>
                                                </div>
                                                <div>
                                                    <UserCard>
                                                        <div>
                                                            <Link to={`/users/${user.id}`}>
                                                            <UserPicture>
                                                            <div><img src={user.photo_url}/></div>
                                                            </UserPicture>
                                                            {user.first_name}
                                                            {user.last_name}
                                                            </Link>
                                                        </div>
                                                    </UserCard>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                )}
                            </div>
                </div>
                    </div>
                </div>



        </div>

        )
    }
}
export default UsersList;
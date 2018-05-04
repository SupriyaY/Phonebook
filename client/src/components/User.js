import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import styled from "styled-components";


class User extends Component{
constructor() {
super();
this.state = {
user: {},
contacts: []
}
}

    componentWillMount() {
        console.log('mounting')
        const userId = this.props.match.params.id;
        this.grabUser(userId)
    }


    grabUser = async (userId) => {
        try {
            const userId = this.props.match.params.userId
            const userPhonebook = await axios.get(`/api/users/${userId}`)
            console.log(userPhonebook.data)
            await this.setState({ user: userPhonebook.data.user, contacts: userPhonebook.data.contacts });
        } catch (error) {
            console.log(error)
            await this.setState({ error: error.message })
        }
    }
    ender() {
        return (


            <div>

                {/* <Crimes>
                    <CrimeTitle>
                        <h1>{this.state.crime.title}</h1>
                    </CrimeTitle>
                    <CrimeDescription>
                        <h2>{this.state.crime.description}</h2>
                    </CrimeDescription>
                    <ReportCrimeLink>
                        <Link to={`/crimes/${this.props.match.params.crimeId}/comments/create`}>
                            <FlatButton label="Report Suspicious Activity" />{" "}
                        </Link>
                    </ReportCrimeLink>
                </Crimes> */}

                <div>
                    <div>
                        {this.state.contacts.map(contact =>
                            <div>
                                <div>
                                    <div>
                                        <div key={contact.id}>
                                            <h1>{contact.first_name}</h1>
                                            <h1>{contact.last_name}</h1>
                                            <h1>{contact.cell_number}</h1>
                                            <h1>{contact.work_number}</h1>
                                            <h1>{contact.home_number}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {/* <EditCommentButton>
                                        <div>
                                            <Link to={`/crimes/${this.props.match.params.crimeId}/comments/${comment.id}/view`}>
                                                <FlatButton label="Edit" />
                                            </Link>
                                        </div>
                                    </EditCommentButton> */}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}























export default User;
import React, {Component} from 'react';
import Modal from 'react-modal';
import { Button, Card, Image } from 'semantic-ui-react'

const API = 'http://localhost:4000/users';
const DEFAULT_QUERY = 'redux';


class Users extends Component {

    constructor(props){
        super(props);

        this.state = {
            users: [],
        };
    }

    componentDidMount(){
        fetch(API + DEFAULT_QUERY)
        .then(response => response.json())
        .then(data => this.setState({ users: data.users }));
    }

    render(){
        const {users} = this.state;

        return(
            <div>
                <ul>
                    {users.map(user =>
                        <li key={user.user_id}>
                            <a href={user.url}>{user.title}</a>
                        </li>)}
                </ul>
            </div>
        )
    }
    

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         users: []
    //     }
    // }

    // componentDidMount() {
    //     let self = this;
    //     fetch('http://localhost:4000/userss', {
    //         method: 'GET'
    //     }).then(function(response) {
    //         if (response.status >= 400) {
    //             throw new Error("Bad response from server");
    //         }
    //         return response.json();
    //     }).then(function(data) {
    //         self.setState({users:data});
    //         console.log(data)
    //     }).catch(err => {
    //     console.log('caught it!',err);
    //     })
    // }

    // renderUsers(){
    //     const users = this.state.users.map(UserProfiles =>{
    //         return {
    //             header: user.user_id,
    //             description: <a>View User</a>,
    //             fluid: true
    //         }
    //     });

    //     return <Card.Groupusers users={users}/>;
    // }users

    // renderUserID = ({userIusersD, user_id}) => <div key={userID}>{user_id}</div>
    // renderUserFirstName = users({userFirstName, user_firstname}) => <div key={userFirstName}>{user_firstname}</div>
    // renderUserLastName = (users{userLastName, user_lastname}) => <div key={userLastName}>{user_lastname}</div>
}

export default Users;

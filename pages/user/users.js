import React, {Component} from 'react';
import Modal from 'react-modal';
import { Button, Card, Image } from 'semantic-ui-react'



export default class Users extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        let self = this;
        fetch('http://localhost:4000/userss', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            self.setState({users:data});
            console.log(data)
        }).catch(err => {
        console.log('caught it!',err);
        })
    }

    renderUserID = ({userID, user_id}) => <div key={userID}>{user_id}</div>
    renderUserFirstName = ({userFirstName, user_firstname}) => <div key={userFirstName}>{user_firstname}</div>

    render() {
      const {users} = this.state;
      console.log(users);
        return (
        <div className="container">
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
            <div className="panel panel-default p50 uth-panel">
                {users.map(this.renderUserID)}
                {users.map(this.renderUserFirstName)}
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Member name</th>
                            <th>Member email</th>
                            <th>Blood Group</th>
                            <th>Phone number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{users.map(this.renderUserFirstName)}</td>
                        <td>{users.map(this.renderUserFirstName)}</td>
                        <td>{users.map(this.renderUserFirstName)}</td>
                        <td>{users.map(this.renderUserFirstName)}</td>
                        <td><a>Edit</a>|<a>Delete</a></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}

//Madi Glew's 2212 React Tutorial
//run in chrome!

import React from 'react';

var AccountCreationComponent = React.createClass({

    //initiallizing user account
    getInitialState () {
        return {
            name : "",
            message : "..."
        }
    },

    //handling the account name
    handleNameChange (e) {
        // Prevent following the link.
        e.preventDefault();
        this.setState({ name : e.target.value , message : "..."});


    },


    //handling the message which displays whether or
    //not the user accoutn has been created successfully
    handleMessage(e) {
        // Prevents reinitialization
        e.preventDefault();
        let name = this.state.name;
        fetch('http://localhost:8080/accountCreation/createAccount?'
            + 'userName=' + name, {
            method: 'POST'
        }).then(res =>{
            if(res.ok){
                this.setState({name: this.state.name, message: 'Account Created!'});
            }
            else{

                this.setState({ name: this.state.name, message: 'Account could not be created because the username is already taken.'});
            }
        })
    },

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" defaultValue={this.state.name} onChange={this.handleNameChange} />
                        <input type="submit" value="Create Account :)" onClick={this.handleMessage}/>
                    </label>

                </form>
                Name: {this.state.name}
                <br/>
                Message: {this.state.message}
                <br/>

            </div>
        );
    }
});

export class AccountCreation extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <AccountCreationComponent/>
            </div>
        );
    }
}
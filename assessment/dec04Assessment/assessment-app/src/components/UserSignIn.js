import React, { Component } from "react";
export default class UserSignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : "",
            logged : "false"
        }
    }

    login(){
        this.setState({
            username : "",
            logged : "true"
        })
    }

    render(){
        return(
            <>
                <div>
                    <form onSubmit={this.login}>
                        <input type="text" value={this.state.username}></input>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                Logged in: {this.state.logged}
            </>
        )
    }
}
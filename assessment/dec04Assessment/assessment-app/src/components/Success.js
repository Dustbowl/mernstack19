import React, { Component } from "react";
import SuccessChild from "./SuccessChild";
import SuccessStory from "./SuccessStory";
import UserSignIn from "./UserSignIn";
export default class Success extends Component {
    constructor(props) {
        super(props);
        this.state= {
            quotes : ["Work hard, play hard", "Never give up"],
            msg : "nothing"
        }
        
    }
    callBackMsg = (message)=>{
        this.setState({
            msg : message
        })
    }
    click = (evt)=>{
        this.setState({
            msg : "nothing"
        })
    }
    render(){
        return(
            <>
                <h1>Success</h1>
                <body>
                    <div>
                        Success Quotes:
                        <br></br>
                        {this.state.quotes}
                    </div>  
                    <button type="button" onClick={this.callBackMsg("hello")}> click me </button>
                </body>
                <SuccessChild name="Successful name: JFK" address="Successful Address: Canada" comp={<SuccessStory/>}/>
                <UserSignIn callBackEvent={this.click}></UserSignIn>
            </>    
        )
    }
}
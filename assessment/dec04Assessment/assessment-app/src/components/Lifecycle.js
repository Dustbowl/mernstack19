import React, { Component } from "react";
export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success : "not success"
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                success : "The success"
            })
        }, 3000);
    }
    shouldComponentUpdate(nextPops, nextState){
        console.log("shouldComponentUpdate method is called")
    
        if (this.state.success == nextState.success ) {
            return false 
        } else {
            return true   
        }
    }
    getSnapshotBeforeUpdate(prevState, prevProps){
        return {
            prevState,
            prevProps
        }
    }
    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount is called")
    }
    render(){
        return(
            <>
                LifeCycle
            </>    
        )
    }
}
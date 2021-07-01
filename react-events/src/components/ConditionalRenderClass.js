import React, { Component } from 'react'
import CondFunctionMessage from './CondFunctionalMessage'

export class ConditionalRenderClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: true,
            isLoggedIn: false
        }
    }

    // Event into a flip/flop
    logIn = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        }, () =>{
        
            console.log(this.state.isLoggedIn)
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.isLoaded ? (
                    <button onClick={this.logIn}>
                        {this.state.isLoggedIn ? (
                            "Logout"
                        ):(
                            "Login"
                        )}
                    </button>
                ) : "Please wait"}</h1>
                
                <CondFunctionMessage isLoggedIn={this.state.isLoggedIn} />
            </div>
        )
    }
}

export default ConditionalRenderClass

import React, { Component } from 'react'

export class EventClass extends Component {

    buttonclicked(){
        console.log("Hello")
    }
    render() {
        return (
            <div>
                <button onClick={this.buttonclicked}>Click Me - Event</button>
                
            </div>
        )
    }
}

export default EventClass

import React from 'react'

function EventFunctional() {
    const funcButtonClicked = () => console.log("Shit");

    return (
        <div>
            <button onClick={funcButtonClicked}>Click me Functional</button>
        </div>
    )
}

export default EventFunctional

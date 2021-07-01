import React from 'react'

function DisplayFruit(props) {
    let fruit = props.fruit
    return (
        <div key={fruit.name}>
            <h1>{fruit.name}</h1>
            <p>Are {fruit.colour} and taste like {fruit.tasty ? fruit.name : "Poop"}</p>
        </div>
    )
}

export default DisplayFruit


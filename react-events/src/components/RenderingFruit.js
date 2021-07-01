import React from 'react'
import DisplayFruit from './DisplayFruit.js';

function Renderingfruits() {
    const fruitlist = [
        {
            name: "Apples",
            colour: "Red",
            tasty: true
        },
        {
            name: "Bananas",
            colour: "Yellow",
            tasty: true
        },
        {
            name: "Prunes",
            colour: "Purple",
            tasty: false
        }
 
    ];

    return (
        <div>
            {fruitlist.map(fruit => {
                // Using the nesting method
                return (
                    <DisplayFruit fruit={fruit} key={fruit.name}/>
                )
                // If you dont want to create smaller components
                // return (
                //     <div><h1>{fruit.name} or whatever</h1></div>
                // )
            }
            )}
        </div>
    )
}

export default Renderingfruits

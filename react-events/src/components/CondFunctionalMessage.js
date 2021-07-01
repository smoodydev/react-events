import React from 'react'

function CondFunctionMessage(props) {
    return (
        <div>
            {props.isLoggedIn ? (
                <div>
                    <h2>
                        Is Logged in
                    </h2>
                    <p>Please click the Logout button</p>
                    </div>
                ) : (
                    <div>
                    <h2>
                        Is Not Logged In
                    </h2>
                    <p>Please click the Login button</p>
                    </div>
                )}
        </div>
    )
}

export default CondFunctionMessage

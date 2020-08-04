import React, { Component } from 'react'

export default class Login2 extends Component {
    render() {
        return (
            <div className='login2'>
               
                <div className='inputBox'>
                <h1>Login page</h1>
                <input className='inputs' name='username' placeholder='Username'></input>
                <input className='inputs' type='password' name='password' placeholder='Password'></input>

                <div className='buttonFloat'>
                    <button>Login</button>
                </div>
                </div>
               
            </div>
        )
    }
}

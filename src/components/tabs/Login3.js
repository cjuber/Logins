import React, { Component } from 'react'

export default class Login3 extends Component {
    render() {
        return (
            <div className='login3'>
                

                <div className='inputBox'>
                    <h1>Login</h1>
                    <h2>Username</h2>
                    <input className='inputs' type='email' name='username' placeholder='Username'></input>
                    <h2>Password</h2>
                    <input className='inputs' type='password' name='password' placeholder='Password'></input>
                    <button>Login</button>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Login4 extends Component {
    render() {
        return (
            <div className='login4'>
                <div className='authBox'>
                    <h1>Login page</h1>
                    <input className='inputs' name='username' placeholder='Username'></input>
                    <input className='inputs' type='password' name='password' placeholder='Password'></input>
                    <button>Log in</button>
                </div>
            </div>
        )
    }
}

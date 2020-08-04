import React, { Component } from 'react'

export default class Login5 extends Component {
    render() {
        return (
            <div className='login5'>
               <div className='authBox'>
                    
                    <input className='inputs' name='username' placeholder='Username'></input>
                    <input className='inputs' type='password' name='password' placeholder='Password'></input>
                    <button>Login</button>
                </div>
            </div>
        )
    }
}

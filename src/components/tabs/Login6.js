import React, { Component } from 'react'

export default class Login6 extends Component {
    render() {
        return (
            
            <div className='login6'>
                <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700' rel='stylesheet' type='text/css'></link>
               <div className='authBox'>
                   <div className='toggle'>
                       <h1>Sign In</h1>
                       <h1 className='inactive'>Sign Up</h1>
                   </div>
                    <label>USERNAME</label>
                    <input className='inputs' name='username' ></input>
                    <label >PASSWORD</label>
                    <input className='inputs' type='password' name='password' ></input>
                    <button>Login</button>
                    <a href='#/6'>Forgot Password?</a>
                </div>
            </div>
        )
    }
}

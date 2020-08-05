import React, { Component } from 'react'

export default class Login8 extends Component {
    render() {
        return (
            <div className='login8'>
                <div className='lowerBox'></div>
                <div className='triangle'></div>
            <div className='authBox'>
                 
                 <input className='inputs' name='username' placeholder='Username'></input>
                 <input className='inputs' type='password' name='password' placeholder='Password'></input>
                 <button>Login</button>
             </div>
         </div>
        )
    }
}

import React, { Component } from 'react'

export default class Login7 extends Component {
    render() {
        return (
            <div className='login7'>
            <div className='authBox'>
                 
                 <input className='inputs' name='username' placeholder='Username'></input>
                 <input className='inputs' type='password' name='password' placeholder='Password'></input>
                 <button>Submit</button>
             </div>
         </div>
        )
    }
}

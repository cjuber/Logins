import React, { Component } from 'react'

export default class Login1 extends Component {
    render() {
        return (
            <div className='login1'>
                
                <div className='authBox'>
                    <div className='circle'></div>
                   
                    


                    <div className='inputBox'>
                        <input className='inputs' name='username' placeholder='Username'></input>
                        <input className='inputs' type='password' name='password' placeholder='Password'></input>
                        
                    </div>


                    <button>Login</button>
                    
                </div>
                
            </div>
        )
    }
}

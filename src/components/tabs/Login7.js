import React, { Component } from 'react'

export default class Login7 extends Component {
    constructor(){
        super()
        this.state={
            toggle: false
        }
    }
    toggle = () =>{
            this.setState({
                toggle: !this.state.toggle
            })
    }
    
    
    render() {
        return (
            <div className='login7'>
            <div className='authBox'>
                 
                <input className={this.state.toggle ? ('inputNo') : ('inputs')}  name='username' placeholder='Username'></input>
                <input className={this.state.toggle ? ('inputNo') : ('inputs')}  type='password' name='password' placeholder='Password'></input>

                <input className={this.state.toggle ? ('inputs') : ('inputNo')} name='username' placeholder='Email'></input>
                <input className={this.state.toggle ? ('inputs') : ('inputNo')} name='username' placeholder='Username'></input>
                <input className={this.state.toggle ? ('inputs') : ('inputNo')} type='password' name='password' placeholder='Password'></input>
                
            <div>
                <button>Submit</button>
                <a href='#/7' className={this.state.toggle ? ('aT') : ('aF')}>Forgot Password</a>
                <button onClick={this.toggle} className='toggleButton'>{this.state.toggle ? ('Sign Up') : ('Sign In')}</button>
                
            </div>
            
             </div>
         </div>
        )
    }
}

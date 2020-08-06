import React, { Component } from 'react'

export default class Login2 extends Component {
    constructor(){
        super()
        this.state={
            toggle: false
        }
    }
    toggleTrue = () =>{
            this.setState({
                toggle:true
            })
    }
    toggleFalse = () =>{
            this.setState({
                toggle:false
            })
    }
    render() {
        return (
            <div className='login2'>
               
                <div className='inputBox'>
                <div className='tabs'>
                <h1 className={this.state.toggle ? ('tabButtonI') : ('tabButtonA')} onClick={this.toggleFalse}>Sign In</h1>
                <h1 className={this.state.toggle ? ('tabButtonA') : ('tabButtonI')}onClick={this.toggleTrue}>Sign Up</h1>
                </div>
                <input className={this.state.toggle ? ('inputNo') : ('inputs')} name='username' placeholder='Username'></input>
                <input className={this.state.toggle ? ('inputNo') : ('inputs')} type='password' name='password' placeholder='Password'></input>

                <input className={this.state.toggle ? ('inputs') : ('inputNo')} name='username' placeholder='Email'></input>
                <input className={this.state.toggle ? ('inputs') : ('inputNo')} placeholder='Username'></input>
                <input className={this.state.toggle ? ('inputs') : ('inputNo')} name='password' placeholder='Password'></input>

                <div className='buttonFloat'>
                    <button>{this.state.toggle ? ('Sign Up') : ('Sign In')}</button>
                </div>
                </div>
               
            </div>
        )
    }
}

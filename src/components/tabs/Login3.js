import React, { Component } from 'react'

export default class Login3 extends Component {
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
            <div className='login3'>
                

                <div className='inputBox'>
                    <div className='tabs'>
                    <h1 className={this.state.toggle ? ('tabButtonI') : ('tabButtonA')} onClick={this.toggleFalse}>Sign In</h1>
                    <h1 className={this.state.toggle ? ('tabButtonA') : ('tabButtonI')}onClick={this.toggleTrue}>Sign Up</h1>
                    </div>
                    <h2 className={this.state.toggle ? ('labelI') : ('labelA')} >Username</h2>
                    <input className={this.state.toggle ? ('inputNo') : ('inputs')} type='email' name='username' placeholder='Username'></input>
                    <h2 className={this.state.toggle ? ('labelI') : ('labelA')} >Password</h2>
                    <input className={this.state.toggle ? ('inputNo') : ('inputs')} type='password' name='password' placeholder='Password'></input>

                    <h2 className={this.state.toggle ? ('labelA') : ('labelI')} >Email</h2>
                    <input className={this.state.toggle ? ('inputs') : ('inputNo')} type='email' name='username' placeholder='Username'></input>
                    <h2 className={this.state.toggle ? ('labelA') : ('labelI')} >Username</h2>
                    <input className={this.state.toggle ? ('inputs') : ('inputNo')} type='email' name='username' placeholder='Username'></input>
                    <h2 className={this.state.toggle ? ('labelA') : ('labelI')} >Password</h2>
                    <input className={this.state.toggle ? ('inputs') : ('inputNo')}type='password' name='password' placeholder='Password'></input>
                    <button>{this.state.toggle ? ('Sign Up') : ('Sign In')}</button>
                </div>
            </div>
        )
    }
}

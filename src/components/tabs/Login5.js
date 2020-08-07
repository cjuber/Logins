import React, { Component } from 'react'

export default class Login5 extends Component {
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
            <div className='login5'>
                <div className='tabs'>
                    <button className={this.state.toggle ? ('tabButtonI') : ('tabButtonA')} onClick={this.toggleFalse}>Log in</button>
                    <button className={this.state.toggle ? ('tabButtonA') : ('tabButtonI')} onClick={this.toggleTrue}>Register</button>
                    </div>
               <div className='authBox'>
               
               <input className={this.state.toggle ? ('inputNo') : ('inputs')}  name='username' placeholder='Username'></input>
                    <input className={this.state.toggle ? ('inputNo') : ('inputs')}  type='password' name='password' placeholder='Password'></input>

                    <input className={this.state.toggle ? ('inputs') : ('inputNo')} name='username' placeholder='Email'></input>
                    <input className={this.state.toggle ? ('inputs') : ('inputNo')} name='username' placeholder='Username'></input>
                    <input className={this.state.toggle ? ('inputs') : ('inputNo')} type='password' name='password' placeholder='Password'></input>
                    <button>{this.state.toggle ? ('Register') : ('Log In')}</button>
                </div>
            </div>
        )
    }
}

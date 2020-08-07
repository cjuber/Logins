import React, { Component } from 'react'

export default class Login8 extends Component {
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
            <div className='login8'>
                <div className='lowerBox'></div>
                <div className='triangle'></div>
                <div className='triangle2'></div>
                <button className='toggleButton1' onClick={this.toggleTrue}>Sign Up</button>
                <button className='toggleButton2' onClick={this.toggleFalse}>Sign In</button>
            <div className={this.state.toggle ? ('authBoxR') : ('authBoxL')}>
                 
            <input className={this.state.toggle ? ('inputNo') : ('inputs')}  name='username' placeholder='Username'></input>
                    <input className={this.state.toggle ? ('inputNo') : ('inputs')}  type='password' name='password' placeholder='Password'></input>

                    <input className={this.state.toggle ? ('inputs') : ('inputNo')} name='username' placeholder='Email'></input>
                    <input className={this.state.toggle ? ('inputs') : ('inputNo')} name='username' placeholder='Username'></input>
                    <input className={this.state.toggle ? ('inputs') : ('inputNo')} type='password' name='password' placeholder='Password'></input>
                    <button>{this.state.toggle ? ('Register') : ('Sign In')}</button>
             </div>
         </div>
        )
    }
}

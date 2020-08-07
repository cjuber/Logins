import React, { Component } from 'react'

export default class Login6 extends Component {
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
            
            <div className='login6'>
                <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700' rel='stylesheet' type='text/css'></link>
               <div className='authBox'>
                   <div className='tabs'>
                   <button className={this.state.toggle ? ('tabButtonI') : ('tabButtonA')} onClick={this.toggleFalse}>Sign In</button>
                    <button className={this.state.toggle ? ('tabButtonA') : ('tabButtonI')} onClick={this.toggleTrue}>Sign Up</button>
                   </div>
                    <label className={this.state.toggle ? ('labelT') : ('labelF')}>USERNAME</label>
                    <input className={this.state.toggle ? ('inputNo') : ('inputs')}  name='username' ></input>
                    <label className={this.state.toggle ? ('labelT') : ('labelF')}>PASSWORD</label>
                    <input className={this.state.toggle ? ('inputNo') : ('inputs')}  type='password' name='password' ></input>

                    <label className={this.state.toggle ? ('labelF') : ('labelT')}>EMAIL</label>
                    <input className={this.state.toggle ? ('inputs') : ('inputNo')}  name='username' ></input>
                    <label className={this.state.toggle ? ('labelF') : ('labelT')}>USERNAME</label>
                    <input className={this.state.toggle ? ('inputs') : ('inputNo')}  name='username'  ></input>
                    <label className={this.state.toggle ? ('labelF') : ('labelT')}>PASSWORD</label>
                    <input className={this.state.toggle ? ('inputs') : ('inputNo')}  type='password' name='password' ></input>

                    <button>{this.state.toggle ? ('Sign Up') : ('Sign In')}</button>
                    <a href='#' className={this.state.toggle ? ('aT') : ('aF')}>Forgot Password</a>
                </div>
            </div>
        )
    }
}

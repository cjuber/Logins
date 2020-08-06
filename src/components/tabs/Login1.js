import React, { Component } from 'react'

export default class Login1 extends Component {
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
            <div className='login1'>
                <div className='tabs'>
                        <button className={this.state.toggle ? ('tabButtonI') : ('tabButtonA')} onClick={this.toggleFalse}>Sign In</button>
                        <button className={this.state.toggle ? ('tabButtonA') : ('tabButtonI')}onClick={this.toggleTrue}>Sign Up</button>

                    </div>
                <div className='authBox'>
                    
                    {/* <div className='circle'></div> */}
                   
                    


                    <div className='inputBox'>
                        <input className={this.state.toggle ? ('inputNo') : ('inputs')} name='username' placeholder='Username'></input>
                        <input className={this.state.toggle ? ('inputNo') : ('inputs')} type='password' name='password' placeholder='Password'></input>

                        <input className={this.state.toggle ? ('inputs') : ('inputNo')} name='username' placeholder='Email'></input>
                        <input className={this.state.toggle ? ('inputs') : ('inputNo')} name='username' placeholder='Username'></input>
                        <input className={this.state.toggle ? ('inputs') : ('inputNo')} type='password' name='password' placeholder='Password'></input>
                        
                        
                    </div>


                    <button>{this.state.toggle ? ('Sign Up') : ('Sign In') }</button>
                    <a href='#' className={this.state.toggle ? ('aT') : ('aF')}>Forgot Password</a>


                    
                    
                </div>
                
            </div>
        )
    }
}

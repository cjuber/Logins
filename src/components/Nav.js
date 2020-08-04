import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                
               <Link to='/1' className='link'><h1>Login 1</h1></Link>
               <Link to='/2' className='link'><h1>Login 2</h1></Link>
               <Link to='/3' className='link'><h1>Login 3</h1></Link>
               <Link to='/4' className='link'><h1>Login 4</h1></Link>
               <Link to='/5' className='link'><h1>Login 5</h1></Link>
               <Link to='/6' className='link'><h1>Login 6</h1></Link>
               <Link to='/7' className='link'><h1>Login 7</h1></Link>
               <Link to='/8' className='link'><h1>Login 8</h1></Link>
               <Link to='/9' className='link'><h1>Login 9</h1></Link>
               <Link to='/10' className='link'><h1>Login 10</h1></Link>
               <Link to='/11' className='link'><h1>Login 11</h1></Link>
               <Link to='/12' className='link'><h1>Login 12</h1></Link>
               <Link to='/13' className='link'><h1>Login 13</h1></Link>
               <Link to='/14' className='link'><h1>Login 14</h1></Link>
            </div>
        )
    }
}

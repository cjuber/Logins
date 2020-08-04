import React from 'react'
import {Switch, Route} from 'react-router-dom'
import App from '../App'
import Login1 from '../components/tabs/Login1'
import Login2 from '../components/tabs/Login2'
import Login3 from '../components/tabs/Login3'
import Login4 from '../components/tabs/Login4'
import Login5 from '../components/tabs/Login5'
import Login6 from '../components/tabs/Login6'
import Login7 from '../components/tabs/Login7'
import Login8 from '../components/tabs/Login8'
import Login9 from '../components/tabs/Login9'
import Login10 from '../components/tabs/Login10'
import Login11 from '../components/tabs/Login11'
import Login12 from '../components/tabs/Login12'
import Login13 from '../components/tabs/Login13'
import Login14 from '../components/tabs/Login14'


export default (
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/1' component={Login1} />
        <Route path='/2' component={Login2} />
        <Route path='/3' component={Login3} />
        <Route path='/4' component={Login4} />
        <Route path='/5' component={Login5} />
        <Route path='/6' component={Login6} />
        <Route path='/7' component={Login7} />
        <Route path='/8' component={Login8} />
        <Route path='/9' component={Login9} />
        <Route path='/10' component={Login10} />
        <Route path='/11' component={Login11} />
        <Route path='/12' component={Login12} />
        <Route path='/13' component={Login13} />
        <Route path='/14' component={Login14} />
        
    </Switch>
    
    )
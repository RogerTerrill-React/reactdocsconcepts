import React, {Component} from 'react'
import Clock from './Clock';

class App extends Component {
    //Each of the Clocks has its own timerId
    render(){
        return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
        )
    }
}

export default App;
import React, {Component} from 'react';

class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {date: new Date()};
    }

    componentDidMount(){ //The timerId is used to be able to destroy this instance with clearInterval() or else it wouldn't do the right one and it's custom to any string
        this.timerIDTracker = setInterval(
            () => this.tick(),
            1000
        );
        console.log(this.timerIDTracker);
    }

    componentWillUnmount(){
        clearInterval(this.timerIDTracker);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

export default Clock;
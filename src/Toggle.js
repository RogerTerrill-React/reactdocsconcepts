import React, {Component} from 'react'

class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = {isToggleOn: true};

        // This binding is necessary to make 'this' work in the callback
        // You have to be careful about the meaning of this in JSX callbacks. 
        // In JavaScript, class methods are not bound by default. 
        // If you forget to bind this.handleClick and pass it to onClick,
        //  this will be undefined when the function is actually called.

        // When a function is used as an event handler, its 'this' is set to the element the event fired from. As a DOM event handler

        // Not bound by default mean that when you give your method as a callback 
        // for an event (onClick={this.editState} for example) the onClick event 
        // bind your function with another context, except if you explicitely bind 
        // your method with the right context before (this.editState = this.editState.bind(this) 
        // in the constructor or use arrow function). So it's normally that when you call editState yourself, you can access to this
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
};

export default Toggle;
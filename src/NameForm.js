import React, {Component} from 'react'

class NameForm extends Component {
    constructor(props) {
        super(props);

        this.initialState = {value: ''};

        this.state={value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        this.setState(this.initialState); // I added this little method to see if it would wipe the text input box and it did
        event.preventDefault(); //This is a good example of when to use this since it prevents a submit, we don't want a submit, we are faking one.
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type='text' value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;
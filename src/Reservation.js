import React, {Component} from 'react'

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target; // Creates the event target which is where I click
        const value = target.type === 'checkbox' ? target.checked : target.value; // Based on that target, it'll check the type attribute to figure out which input it is
        const name = target.name; // We then check the event target again and this time we pull out the name attribute value

        this.setState({
            [name]: value
        });
    }

    render(){
        return (
            <form>
                <label>
                    Is going:
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of Guests:
                    <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
                </label>
            </form>
        )
    }
}

export default Reservation;
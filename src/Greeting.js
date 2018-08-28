import React, {Component} from 'react'

const UserGreetings = () => {
    return <h1>Welcome back!</h1>
}

const GuestGreeting = () => {
    return <h1>Please sign up</h1>
}

const LoginButton = (props) => {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

const LogoutButton = (props) => {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class Greeting extends Component {
    render(){
        const isLoggedIn = this.props.isLoggedIn;
        if (isLoggedIn) {
            return <UserGreetings />;
        }
        return <GuestGreeting />
    }
}

export default Greeting;




// Using Functions

// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
//   }
  
//   function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
//   }

//   function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//       return <UserGreeting />;
//     }
//     return <GuestGreeting />;
//   }
  
//   ReactDOM.render(
//     // Try changing to isLoggedIn={true}:
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
//   );
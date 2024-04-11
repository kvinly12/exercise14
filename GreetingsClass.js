import React, { Component } from 'react';

class GreetingsClass extends Component {
    render() {
        const name = prompt('Enter your name:');
        return <h1>Hello {name || 'Anonymous'}!</h1>;
    }
}

export default GreetingsClass;

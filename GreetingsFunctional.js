import React from 'react';

const GreetingsFunctional = () => {
    const name = prompt('Enter your name:');
    return <h1>Hello {name || 'Anonymous'}!</h1>;
};

export default GreetingsFunctional;

import React from 'react';
import ReactDOM from 'react-dom';
import GreetingsFunctional from './GreetingsFunctional';
import GreetingsClass from './GreetingsClass';

const App = () => {
    return (
        <div>
            <GreetingsFunctional />
            <GreetingsClass />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

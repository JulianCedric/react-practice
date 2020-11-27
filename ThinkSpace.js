// 2020.11.27 - Counter.js

import React from 'react';
import { Button } from 'semantic-ui-react';

class Counter extends React.Component {
    state = {  
        count: 0,
        letters: ['a', 'b', 'c']
    };
    
    formatCount() {
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }

    render() { 
        return (  
            <div>
                <h1>{this.formatCount()}</h1>
                <Button primary>Increment</Button>
                <ul>
                    {this.state.letters.map(letter => <li key={letter}>{letter}</li>)}
                </ul>
            </div>
        );
    }
}
 
export default Counter;

// Conditional Rendering (1 of 2)

import React from 'react';
import { Button } from 'semantic-ui-react';

class Counter extends React.Component {
    state = {  
        count: 0,
        letters: ['a', 'b', 'c']
    };
    
    renderLetters() {
        if (this.state.letters.length === 0) return <p>There are no letters!</p>
        return <ul>{this.state.letters.map(letter => <li key={letter}>{letter}</li>)}</ul>
    }

    render() { 
        return (  
            <div>
                {this.renderLetters()}
            </div>
        );
    }
}
 
export default Counter;

// Conditional Rendering (2 of 2)

import React from 'react';
import { Button } from 'semantic-ui-react';

class Counter extends React.Component {
    state = {  
        count: 0,
        letters: []
        // letters: ['a', 'b', 'c']
    };
    
    renderLetters(){
        if (this.state.letters.length === 0) return <p>There are no letters!</p>
        return <ul>{this.state.letters.map(letter => <li key={letter}>{letter}</li>)}</ul>
    }

    render() { 
        return (  
            <div>
                {this.state.letters.length === 0 && 'Add your first letter.'}
                {this.renderLetters()}
            </div>
        );
    }
}
 
export default Counter; 
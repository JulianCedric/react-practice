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

// Movies Table

<table class="ui celled table"><thead class=""><tr class=""><th class="">Header</th><th class="">Header</th><th class="">Header</th></tr></thead><tbody class=""><tr class=""><td class=""><div class="ui ribbon label">First</div></td><td class="">Cell</td><td class="">Cell</td></tr><tr class=""><td class="">Cell</td><td class="">Cell</td><td class="">Cell</td></tr><tr class=""><td class="">Cell</td><td class="">Cell</td><td class="">Cell</td></tr></tbody><tfoot class=""><tr class=""><th colSpan="3" class=""><div class="ui pagination right floated menu"><a class="icon item"><i aria-hidden="true" class="chevron left icon"></i></a><a class="item">1</a><a class="item">2</a><a class="item">3</a><a class="item">4</a><a class="icon item"><i aria-hidden="true" class="chevron right icon"></i></a></div></th></tr></tfoot></table>
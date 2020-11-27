import React from 'react';
import { Button } from 'semantic-ui-react';

class Counter extends React.Component {
    state = {  
        count: 0,
        letters: []
        // letters: ['a', 'b', 'c']
    };

    formatCount() {
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
    
    renderLetters(){
        if (this.state.letters.length === 0) return <p>There are no letters!</p>
        return <ul>{this.state.letters.map(letter => <li key={letter}>{letter}</li>)}</ul>
    }

    handleIncrement(){
        console.log('Increment Clicked')
    }

    render() { 
        return (  
            <div>
                <h1>{this.formatCount()}</h1>
                {this.state.letters.length === 0 && 'Add your first letter.'}
                {this.renderLetters()}
                <Button onClick={this.handleIncrement} primary>Increment</Button>
            </div>
        );
    }
}
 
export default Counter; 
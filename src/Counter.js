import React from 'react';
import { Button } from 'semantic-ui-react';

class Counter extends React.Component {
    state = {  
        count: 0,
        habits: ['a', 'b', 'c']
    };

    formatCount() {
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
    
    renderHabits(){
        if (this.state.habits.length === 0) return <p>You don't have any habits yet!</p>
        return <ul>{this.state.habits.map(habit => <li key={habit}>{habit}</li>)}</ul>
    }

    handleIncrement(){
        console.log('[ Increment ] Button Clicked')
    }

    addHabitButton(){
        console.log('[ Add Habit ] Button Clicked')

    }

    render() { 
        return (  
            <div>
                <h1>{this.formatCount()}</h1>
                {this.renderHabits()}
                <Button onClick={this.handleIncrement} primary>Increment</Button>
                    <br></br>
                    <br></br>
                <Button color='green' onClick={this.addHabitButton}>Add Habit</Button>
            </div>
        );
    }
}
 
export default Counter; 
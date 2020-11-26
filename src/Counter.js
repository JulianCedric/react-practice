import React from 'react';

class Counter extends React.Component {
    state = {  
        count: 0,
        imageUrl: 'https://picsum.photos/200'
    };

    formatCount() {
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }

    render() { 
        return (  
            <div>
                <img src={this.state.imageUrl} alt="" />
                <span>{this.state.count}</span>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </div>
        );
    }
}
 
export default Counter;
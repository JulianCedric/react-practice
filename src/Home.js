import React from 'react';
import More from './More';
import Less from './Less';

class Home extends React.Component {
    state = {  }
    render() { 
        return (  
                <div> 
                    <h1>— Home Page —</h1>
                    <Home/>
                    <Less/>
                </div> 
        );
    }
}
 
export default Home;
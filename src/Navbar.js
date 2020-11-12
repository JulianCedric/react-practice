import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="ui borderless large menu">
                    <a className="item">
                        <Link to="/" className="link"><i class="big home icon"></i></Link>
                    </a>                
                </div> 
            </div>
        );
    }
}
 
export default Navbar;
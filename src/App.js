import React from 'react';
import Counter from './Counter';
import Form from './Form';
import CRUD from './CRUD';
import Movies from './Movies';

class App extends React.Component {
  state = {  }
  render() { 
    return (  
      <>
        <Counter/>
        <Form/>
        <CRUD />
        {/* <Movies/> */}
      </>
    );
  }
}

export default App;
import React from 'react'
import { Button, Checkbox } from 'semantic-ui-react'

class Form extends React.Component {
    state = {  }
    render() { 
        return (  
          <div>
            <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
  </div>
        );
    }
}
 
export default Form;
import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

class Movies extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <Table className="ui celled table" celled>
                    <Table.Header className="">
                        <Table.Row class="">
                            <Table.HeaderCell>Header</Table.HeaderCell>
                            <Table.HeaderCell>Header</Table.HeaderCell>
                            <Table.HeaderCell>Header</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                            <Label>First</Label>
                            </Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
            );
    }
}
 
export default Movies;
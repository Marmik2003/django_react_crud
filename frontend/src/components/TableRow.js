import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'

const TableRow = ({id, name, skill, onDelete, onEdit}) => {
    const delRow = () => onDelete(id);

    return (
        <Table.Row>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{skill}</Table.Cell>
            <Table.Cell>
                <Button color="blue" animated>
                    <Button.Content visible>Edit</Button.Content>
                    <Button.Content hidden><Icon name="edit outline" /></Button.Content>
                </Button>
                <Button color="red" onClick={delRow} animated>
                    <Button.Content visible>Delete</Button.Content>
                    <Button.Content hidden><Icon name="trash alternate outline" /></Button.Content>
                </Button>
            </Table.Cell>
        </Table.Row>
    )
}

export default TableRow

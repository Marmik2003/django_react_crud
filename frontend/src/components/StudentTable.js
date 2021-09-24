import React from 'react'
import { Table, Header } from 'semantic-ui-react'

import TableRow from './TableRow'

const StudentTable = ({ students, onRowDelete }) => {

    return (
        <>
            <Header as='h1'>Student List</Header>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Skill</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {students.map(student => {
                        return (
                            <TableRow 
                                id={student.id} 
                                name={student.name} 
                                skill={student.skill} 
                                key={student.id}
                                onDelete={stdId => onRowDelete(stdId)}
                            />
                        );
                    })}
                </Table.Body>
            </Table>
        </>
    )
}

export default StudentTable

import React, { useState, useEffect } from 'react'
import server from './api/server'
import { Container, Grid } from 'semantic-ui-react'
import StudentForm from './components/StudentForm'
import StudentTable from './components/StudentTable'

const App = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        server.get('/students/').then(response => {
            setStudents(response.data)
        })
    }, [])

    const formSubmitHandler = (data) => {
        server.post(
            '/students/create/', data
        ).then(response => {
            setStudents([...students, response.data])
        })
    }

    const delStudent = studentId => {
        server.delete(`/students/${studentId}`).then(() => {
            setStudents(students.filter(student => studentId !== student.id))
        })
    }

    return (
        <>
            <Container>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column width={8}>
                            <StudentForm onSubmit={data => {formSubmitHandler(data)}} />
                        </Grid.Column>
                        <Grid.Column>
                            <StudentTable 
                                students={students} 
                                onRowDelete={stdId => delStudent(stdId)} 
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </>
    )
}

export default App

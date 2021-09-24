import React, { useState } from 'react'
import { Form, Header } from 'semantic-ui-react'

const genderOptions = [
    { key: 'm', text: 'Male', value: 'Male' },
    { key: 'f', text: 'Female', value: 'Female' },
    { key: 'o', text: 'Other', value: 'Other' },
    { key: 'n', text: 'Whether not to say', value: '' },
]

const initialFormState = {
    id: null,
    name: "",
    school: "",
    gender: "",
    skill: "",
}

const StudentForm = ({onSubmit}) => {
    const [data, setData] = useState(initialFormState);

    const formChangeHandler = (event) => {
        const value = event.target.value;
        setData({
            ...data,
            [event.target.name]: value
        })
    } 

    const submitHandle = () => {
        onSubmit(data)
    }

    return (
        <>
            <Header as="h1">Add Student</Header>
            <Form onSubmit={submitHandle}>
                <Form.Field required>
                    <label>Full Name</label>
                    <input placeholder="Enter Full Name" maxLength="150" name="name" onChange={formChangeHandler} />
                </Form.Field>
                <Form.Select label="Gender" name="gender" options={genderOptions} placeholder="Gender" onChange={formChangeHandler} />
                <Form.Field required>
                    <label>School Name</label>
                    <input placeholder="Enter School Name" maxLength="150" name="school" onChange={formChangeHandler} />
                </Form.Field>
                <Form.Field>
                    <label>Best Skill</label>
                    <input placeholder="Enter Your Best Skill" maxLength="150" name="skill" onChange={formChangeHandler} />
                </Form.Field>
                <Form.Button type='submit'>Submit</Form.Button>
            </Form>
        </>
    )
}

export default StudentForm

'use client'

import { Form } from "@/components/form"

export default function Login() {
    const content = [
        {
            name : 'Name',
            id : 'name',
            type : 'text',
        },
        {
            name : 'Email',
            id : 'email',
            type : 'email',
        },
        {
            name : 'Password',
            id : 'password',
            type : 'password',
        }
    ]
    return (
        <Form
            head="Sign up"
            content={content}
        />
    )
}
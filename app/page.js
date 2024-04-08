'use client'

import { Form } from "@/components/form"

export default function Login() {
    const content = [
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
            head="Sign in"
            content={content}
        />
    )
}

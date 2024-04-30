'use client'
import { Form } from "@/components/form"
import { Hero } from "@/components/hero"

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
        <div className="grid grid-cols-2 h-screen justify-items-center items-center">
            <Hero/>
            <Form
                head="Sign in"
                content={content}
            />
            
        </div>
    )
}

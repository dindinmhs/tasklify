'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import axios from 'axios'

export function Form({head, content}) {
    // reducer data
    const [data, setData] = useState({})
    // reducer info
    const [info, setInfo] = useState('')
    // router
    const router = useRouter()
    // menangani input
    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setData(values => ({...values, [name] : value}))
    }
    // menangani submit
    async function handleSubmit(e) {
        e.preventDefault()
        // menangani sign in
        if (head === 'Sign in') {
            // check benar
            const res = await fetch('api/signin', {
                method : 'POST',
                headers : {
                    'Content-Type' : 'aplication/json'
                },
                body : JSON.stringify(data)
            })
            const user = await res.json()
            console.log(user)
            // jika benar
            if (user.correct) {
                const res = await signIn('credentials', {
                    redirect : false,
                    email : data.email,
                    password : data.password,
                })
                console.log(res.ok)
                if (res.ok) {
                    router.replace('/dashboard')
                } else {
                    setInfo('failed to sign in')
                }
            } else {
                setInfo('Email or Password Incorrect')
            }
        } else if (head === 'Sign up') {
            // menangani sign up
            try {
                // cek user exist
                const res = await fetch('api/userexist', {
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'aplication/json'
                    },
                    body : JSON.stringify(data)
                })
                const user = await res.json()
                // jika user exist
                if (user.exist) {
                    setInfo('User already exist, please use another email')
                    return
                } else {
                    const res = await fetch('api/signup', {
                        method : 'POST',
                        headers : {
                            'Content-Type' : 'aplication/json'
                        },
                        body : JSON.stringify(data)
                    })
                    if (res.ok) {
                        router.push('/')
                    } else {
                        setInfo('failed to sign up')
                    }
                }
            } catch (error) {
                console.error('Sign up failed', error)
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>{`${head} to Tasklify`}</h2>
                {content.map(el => (
                    <div key={el.id}>
                        <label htmlFor={el.id}>{el.name}</label><br/>
                        <input name={el.id} onChange={handleChange} placeholder={el.id} id={el.id} type={el.type}/>
                    </div>
                ))}
                <p>{info}</p>
                <button type="submit">{head === 'Sign in' ? 'Sign in' : 'Sign up'}</button>
                <p>Or</p>
                <h3>Google</h3>
                <p>{ head === 'Sign in' ? "don't have an account? ": "already have an account? " }
                    <Link href={head === 'Sign in' ? '/signup' : '/'}>{ head === 'Sign in' ? "Sign up ": "Sign in" }</Link>
                </p>
            </form>
        </div>
    )
}
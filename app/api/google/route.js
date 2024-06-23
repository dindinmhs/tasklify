import connectDB from "@/utils/connectdb"
import { NextResponse } from 'next/server'

export async function POST(req) {
    const data = await req.json()
    console.log(data)
    try {
        const db = await connectDB()
        const coll = db.collection('user')
        coll.insertOne(data)
        return NextResponse.json({massage : 'account created'}, {status : 201})
    } catch (error) {
        console.log('failed fetching',error)
        return NextResponse.json({ error: 'failed fetch' }, { status: 500 })
    }
}
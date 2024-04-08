import connectDB from "@/utils/connectdb"
import { NextResponse } from 'next/server'

export async function POST(req) {
    const data = await req.json()
    try {
        const db = await connectDB()
        const coll = db.collection('user')
        const exist = await coll.findOne({ email : data.email, password : data.password})
        console.log(exist)
        if (exist) {
            return NextResponse.json({correct : true }, {status : 200})
        } else {
            return NextResponse.json({correct : false}, {status : 401})
        }
    } catch (error) {
        console.log('failed fetching',error)
        return NextResponse.json({ error: 'failed fetch' }, { status: 500 })
    }
}
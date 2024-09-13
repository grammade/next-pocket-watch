import { connectMongo } from '@/app/lib/mongodb';
import User from '@/app/models/User';
import { NextResponse } from 'next/server';
import {Res} from '@/app/dtos/Response'
import { findQuery } from '@/app/utils/UrlHelper';

const GET = async (req: Request) => {
    await connectMongo();
    const users = await User.find()
    return NextResponse.json(users)
}
const POST = async (req: Request) => {
    await connectMongo();
    const body = await req.json()
    const {username, email} = body
    const newUser = new User({
        username,
        email
    })
    await newUser.save();
    return NextResponse.json(newUser)
}
const DELETE = async(req: Request) => {
    await connectMongo();
    const id = findQuery(req.url, "id")
    let res: Res = {msg: "user(s) deleted", data: null}
    if(!id){
        const exUsers = await User.deleteMany({})
        res.data = exUsers
    }else{
        const exUser = await User.findByIdAndDelete(id);
        if(!exUser){
            return NextResponse.json({}, {status: 404})
        }
        res.data = exUser
    }
    
    return NextResponse.json(res)
}

export {GET, POST, DELETE}


import { NextResponse } from "next/server";

export async function GET(){
    const data = {income: 1000}
    return NextResponse.json(data)
}
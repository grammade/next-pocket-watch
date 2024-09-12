import mongo from '@/app/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
    
}

export async function POST(req:Request) {
  const body = await req.json();
  // Handle POST request
  return NextResponse.json({ message: 'POST request', data: body });
}

export async function PUT(req:Request) {
  const body = await req.json();
  // Handle PUT request
  return NextResponse.json({ message: 'PUT request', data: body });
}

export async function DELETE(req:Request) {
  const { id } = await req.json();
  // Handle DELETE request
  return NextResponse.json({ message: 'DELETE request', id });
}
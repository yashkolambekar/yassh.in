import { NextResponse } from 'next/server';

let views = 0;

export async function GET() {
  views++;
  return NextResponse.json({ views });
}
import Projects from './projects.json';
import { NextResponse } from 'next/server';

export async function GET(Request) {
    return NextResponse.json(Projects)
}

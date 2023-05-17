import Projects from './projects.json';
import { NextResponse } from 'next/server';

export async function GET(req) {
    return NextResponse.json(Projects)
}

import { NextResponse } from 'next/server';

export async function GET() {
    const client_id = process.env.NEXT_PUBLIC_ALLEGRO_CLIENT_ID;
    const redirect_uri = process.env.NEXT_PUBLIC_ALLEGRO_REDIRECT_URI;

    const authUrl = `https://allegro.pl/auth/oauth/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}`;

    return NextResponse.redirect(authUrl);
}
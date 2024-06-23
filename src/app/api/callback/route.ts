import { NextResponse } from 'next/server';
import axios from 'axios';
import querystring from 'querystring';

const client_id = process.env.NEXT_PUBLIC_ALLEGRO_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_ALLEGRO_CLIENT_SECRET;
const redirect_uri = process.env.NEXT_PUBLIC_ALLEGRO_REDIRECT_URI;

export async function POST(request: Request) {
    const { code } = await request.json();

    console.log('Received code:', code);

    try {
        const tokenResponse = await axios.post(
            'https://allegro.pl/auth/oauth/token',
            querystring.stringify({
                grant_type: 'authorization_code',
                code,
                redirect_uri,
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
                },
            }
        );

        console.log('Token response:', tokenResponse.data);

        const { access_token } = tokenResponse.data;
        console.log('Access Token:', access_token);
        return NextResponse.json({ token: access_token });
    } catch (error) {
        console.error('Error fetching access token:', error.response?.data || error.message);
        return new NextResponse('Authentication failed', { status: 500 });
    }
}
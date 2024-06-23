import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    const sort = searchParams.get('sort');
    const token = request.headers.get('cookie')?.split('token=')[1]?.split(';')[0];

    if (!token) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    try {
        let sortParam;
        switch (sort) {
            case 'bestsellers':
                sortParam = '-stock.sold';
                break;
            case 'popular':
                sortParam = '-stock.available';
                break;
            case 'price_asc':
                sortParam = '+sellingMode.price.amount';
                break;
            case 'price_desc':
                sortParam = '-sellingMode.price.amount';
                break;
            default:
                sortParam = '';
        }

        const response = await axios.get(`${process.env.NEXT_PUBLIC_ALLEGRO_API_BASE_URL}/sale/products`, {
            params: { phrase: query, sort: sortParam },
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/vnd.allegro.public.v1+json',
            },
        });
        console.log(response.data);
        return NextResponse.json(response.data);
    } catch (error) {
        console.error('Error fetching products:', error.response?.data || error.message);
        return new NextResponse('Failed to fetch products', { status: 500 });
    }
}
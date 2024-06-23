'use client';

import { useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState('');
    const [products, setProducts] = useState([]);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.get('/api/products', { params: { query, sort } });
            setProducts(response.data.products);
        } catch (error) {
            console.error('Error fetching products:', error.response?.data || error.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Search Products on Allegro</h1>
            <form onSubmit={handleSearch} className="mb-6">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for products"
                    className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
                />
                <div className="mt-4">
                    <label className="block mb-2">Sort by:</label>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-white"
                    >
                        <option value="">Default</option>
                        <option value="bestsellers">Bestsellers</option>
                        <option value="popular">Popular</option>
                        <option value="price_asc">Price: Low to High</option>
                        <option value="price_desc">Price: High to Low</option>
                    </select>
                </div>
                <button type="submit" className="mt-2 w-full p-2 rounded bg-blue-600 hover:bg-blue-700">
                    Search
                </button>
            </form>
            <div>
                {products.length > 0 && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <li key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={product.images[0]?.url}
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-lg font-bold">{product.name}</h2>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Home;
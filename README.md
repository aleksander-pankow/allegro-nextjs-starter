# Allegro NextJS Starter

This is a Next.js application that allows users to search for products on Allegro, with options to sort by bestsellers, popular items, and price. The application features a dark-themed UI using Tailwind CSS.

## Features

- Product search with query input
- Sorting options: Bestsellers, Popular, Price (Low to High, High to Low)
- Dark-themed UI with rounded cards for product display
- Responsive design

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/aleksander-pankow/allegro-product-search.git
    cd allegro-product-search
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
   Create a `.env.local` file in the root of the project and add the following:
    ```env
    NEXT_PUBLIC_ALLEGRO_CLIENT_ID=your_client_id
    NEXT_PUBLIC_ALLEGRO_CLIENT_SECRET=your_client_secret
    NEXT_PUBLIC_ALLEGRO_REDIRECT_URI=http://localhost:3000/callback
    NEXT_PUBLIC_ALLEGRO_API_BASE_URL=https://api.allegro.pl
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- Enter a search query in the input field and click the "Search" button.
- Use the dropdown to select the sorting option.
- The results will be displayed in a responsive grid with rounded cards.

## Technologies Used

- Next.js
- Tailwind CSS
- Axios

## Contributing

Contributions are welcome! Please create a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License.

## Support

If you like this project, consider buying me a coffee!

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png)](https://www.buymeacoffee.com/return.error)

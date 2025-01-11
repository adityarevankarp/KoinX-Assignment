const axios = require('axios');

// Replace with your actual CoinGecko API key


const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/simple/price';

const testCoinGeckoAPI = async () => {
    try {
        const response = await axios.get(COINGECKO_API_URL, {
            params: {
                ids: 'bitcoin,matic-network,ethereum', // IDs of the coins to fetch
                vs_currencies: 'usd', // Currency to fetch the price in
            },
            headers: {
                'x-api-key': process.env.COINGECKO_API_KEY, // Set the API key in the headers
            },
        });

        console.log('CoinGecko API Response:', response.data);
    } catch (error) {
        console.error('Error testing CoinGecko API:', error.response?.data || error.message);
    }
};

// Run the test
testCoinGeckoAPI();

const API_KEY = '2e91014d6bmsh3c14ca4f9dad087p18fc95jsn39fa2bfd2e46';
const API_URL = 'https://yahoo-finance127.p.rapidapi.com/key-statistics/aapl';
const API_HOST = 'yahoo-finance127.p.rapidapi.com';
let newsContainer = document.getElementById('news-container');
let sidebar = document.getElementById('sidebar-container');

let cnt = 0;
const mxm = 10;

const fetchNews = async () => {
    if (cnt >= mxm) return;

    try {
        let response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': API_HOST
            }
        });

        console.log('Response Status:', response.status);
        console.log('Response Headers:', response.headers);

        if (!response.ok) {
            throw new Error('Failed to fetch news: ' + response.status + ' ' + response.statusText);
        }

        let data = await response.json();
        console.log('Data received:', data);

        // Extract relevant properties from the data
        let shortName = data.shortName;
        let marketCap = data.marketCap.raw || data.marketCap; // Handle different possible structures
        let trailingPE = data.trailingPE || 'N/A';
        let forwardPE = data.forwardPE || 'N/A';

        // Render news to the container
        newsContainer.innerHTML += `
            <div>
                <h3>Company: ${shortName}</h3>
                <p>Market Cap: ${marketCap}</p>
                <p>Trailing PE: ${trailingPE}</p>
                <p>Forward PE: ${forwardPE}</p>
            </div>
        `;

        cnt++;
    } catch (error) {
        console.warn('Error:', error.message);
    }
};

// Call fetchNews function (for example on page load or button click)
fetchNews();



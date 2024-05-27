// News API
const NEWS_API_KEY = "63ae134ce98b4f88bf9bc68906a86db9";

const fetchNews = async () => {
    var url = 'https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'from=2024-05-27&' +
        'sortBy=popularity&' +
        'apiKey=63ae134ce98b4f88bf9bc68906a86db9';

    var req = new Request(url);

    fetch(req)
        .then(function (response) {
            console.log(response.json());
        })  
}




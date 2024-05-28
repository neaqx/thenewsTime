
const fetchNews = async () => {
    console.log('fetching news')
    var url = 'https://newsapi.org/v2/everything?q=Apple&from=2024-05-28&sortBy=popularity&apiKey=API_KEY' +
        'q=Apple&' +
        'from=2024-05-28&' +
        'sortBy=popularity&' +
        'apiKey=63ae134ce98b4f88bf9bc68906a86db9';

    var req = new Request(url);

    let a = await fetch(req)
    let response = await a.json()
    console.log(JSON.stringify(Response, null, 2))
}


fetchNews()




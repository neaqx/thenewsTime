const API_KEY = ("63ae134ce98b4f88bf9bc68906a86db9")


async function fetchNews() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY');
    const data = await response.json();
    const newsContainer = document.getElementById('news-container');

    data.articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('col-md-4', 'mb-4');
        newsItem.innerHTML = `
            <div class="card">
                <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description}</p>
                    <a href="${article.url}" target="_blank" class="btn btn-primary">Read more</a>
                </div>
            </div>
        `;
        newsContainer.appendChild(newsItem);
    });
}

fetchNews();



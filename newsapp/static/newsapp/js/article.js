const apiKey = 'GWQVWVnd3DGeNvJka7YNc0mgnwIMqtfh'; 

// Function to make API call to Article Search endpoint
async function fetchArticles(query, filter = '', page = 0, containerId, includeImage = true) {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=${filter}&page=${page}&api-key=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayArticles(data.response.docs, containerId, includeImage);
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
}

// Function to display articles in the DOM
function displayArticles(articles, containerId, includeImage) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous results

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('col-md-12', 'mb-4');

        const card = `
            <div class="card">
                <div class="card-body d-flex align-items-start">
                    <div class="flex-grow-1">
                        <h3 class="card-title">${article.headline.main}</h3>
                        <h5 class="card-text">${article.snippet}</h5>
                        <button class="btn btn-primary read-more" data-url="${article.web_url}">Read more</button>
                    </div>
                    ${includeImage && article.multimedia.length > 0 ? `<img src="https://www.nytimes.com/${article.multimedia[0].url}" class="ml-3" alt="Image" style="width: 150px;">` : ''}
                </div>
            </div>
        `;
        articleElement.innerHTML = card;
        container.appendChild(articleElement);
    });

    // Add event listener for "Read more" buttons
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            localStorage.setItem('articleUrl', url);
            window.location.href = '/article/';
        });
    });
}

fetchArticles('technology', '', 0, 'container-article', true); // Fetch articles with the keyword 'technology', with images
const apiKey = 'GWQVWVnd3DGeNvJka7YNc0mgnwIMqtfh';
let requestQueue = [];

// Function to make API call to Article Search endpoint with rate limiting
async function fetchArticles(query, filter = '', page = 0, containerId, includeImage = true) {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=${filter}&page=${page}&api-key=${apiKey}`;
    requestQueue.push({ url, containerId, includeImage });

    if (requestQueue.length === 1) {
        processQueue();
    }
}

// Function to process the request queue with a delay to prevent too many requests
async function processQueue() {
    if (requestQueue.length === 0) return;

    const { url, containerId, includeImage } = requestQueue[0];

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayArticles(data.response.docs, containerId, includeImage);
    } catch (error) {
        console.error('Error fetching articles:', error);
    } finally {
        requestQueue.shift();
        if (requestQueue.length > 0) {
            setTimeout(processQueue, 2000); // 2-second delay between requests
        }
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
                        <button class="btn btn-secondary bookmark" data-article-id="${article._id}"><i class="fas fa-bookmark"></i> Bookmark</button>
                    </div>
                    ${includeImage && article.multimedia.length > 0 ? `<img src="https://www.nytimes.com/${article.multimedia[0].url}" class="ml-3" alt="Image" style="width: 150px;">` : ''}
                </div>
            </div>
        `;
        articleElement.innerHTML = card;
        container.appendChild(articleElement);
    });

    // Add event listeners to "Read more" buttons
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            window.location.href = `/article/?url=${encodeURIComponent(url)}`;
        });
    });

    // Add event listeners to "Bookmark" buttons
    document.querySelectorAll('.bookmark').forEach(button => {
        button.addEventListener('click', function() {
            if (userIsAuthenticated()) {
                const articleId = this.getAttribute('data-article-id');
                addBookmark(articleId);
            } else {
                alert('You need to be logged in to bookmark articles.');
                window.location.href = '/login/';
            }
        });
    });
}

// Function to check if user is authenticated
function userIsAuthenticated() {
    // Assuming you have a way to check if a user is logged in
    // This could be a call to your server or checking a cookie/token
    // Here we'll just return a placeholder value
    return !!document.getElementById('user-logged-in'); // Example check
}

// Function to add bookmark
async function addBookmark(articleId) {
    try {
        const response = await fetch('/add-bookmark/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCsrfToken(), // Assuming you have a function to get CSRF token
            },
            body: JSON.stringify({ article_id: articleId })
        });

        if (response.ok) {
            alert('Article bookmarked successfully.');
        } else {
            alert('Failed to bookmark article.');
        }
    } catch (error) {
        console.error('Error adding bookmark:', error);
    }
}

// Function to get CSRF token
function getCsrfToken() {
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('csrftoken='))
        .split('=')[1];
    return cookieValue;
}

// Fetch articles based on the current page
const currentPath = window.location.pathname;

if (currentPath.includes('politics')) {
    fetchArticles('politics', '', 0, 'news-container' && 'sidebar-container', true);
} else if (currentPath.includes('business')) {
    fetchArticles('business', '', 0, 'news-container', true);
} else if (currentPath.includes('technology')) {
    fetchArticles('technology', '', 0, 'news-container', true);
} else {
    fetchArticles('home', '', 0, 'news-container', true);
}

fetchArticles('technology', '', 1, 'news-container', true); // Main content: Technology
fetchArticles('politics', '', 1, 'sidebar-container', false); // Sidebar: Politics
fetchArticles('business', '', 1, 'sidebar-container-1', false); // Sidebar: Business
fetchArticles('technology', '', 1, 'additional-news-container-1', true); // Additional content: Technology
fetchArticles('technology', '', 1, 'additional-news-container-2', true); // Additional content: Technology
fetchArticles('technology', '', 1, 'additional-news-container-3', true); // Additional content: Technology

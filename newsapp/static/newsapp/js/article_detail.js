// static/js/article_detail.js

async function fetchFullArticle(articleUrl) {
    const response = await fetch(`/fetch_full_article/?url=${encodeURIComponent(articleUrl)}`);
    const data = await response.json();
    displayFullArticle(data);
}

function displayFullArticle(article) {
    const container = document.getElementById('article-content');
    const content = `
        <h1>${article.headline.main}</h1>
        <p>${article.lead_paragraph}</p>
        <div>${article.byline.original}</div>
        <div>${article.pub_date}</div>
        <div>${article.section_name}</div>
        <div>${article.abstract}</div>
        ${article.multimedia.map(media => `
            <img src="https://www.nytimes.com/${media.url}" alt="${media.subtype}">
        `).join('')}
    `;
    container.innerHTML = content;
}

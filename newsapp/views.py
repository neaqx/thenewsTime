from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics # type: ignore
from rest_framework.permissions import IsAuthenticated, AllowAny # type: ignore
from django.http import HttpResponse
from django.http import JsonResponse
from django.conf import settings
import requests



# Create your views here.
def home(request):
    return render(request, 'newsapp/home.html')

# def article_view(request):
#     article_url = request.GET.get('url')
#     if article_url:
#         response = requests.get(article_url)
#         article_content = response.text
#     else:
#         article_content = "No article URL provided."

#     return render(request, 'newsapp/article.html', {'article_content': article_content})


def article_details(request):
    article_url = request.GET.get('url')
    context = {'article_url': article_url}
    return render(request, 'newsapp/article_details.html', context)

def fetch_full_article(request):
    api_key = 'GWQVWVnd3DGeNvJka7YNc0mgnwIMqtfh'
    article_url = request.GET.get('url')
    article_id = article_url.split('/')[-1]
    api_url = f'https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:("{article_url}")&api-key={api_key}'
    response = requests.get(api_url)
    data = response.json()
    article = data['response']['docs'][0] if data['response']['docs'] else None
    return JsonResponse(article, safe=False)



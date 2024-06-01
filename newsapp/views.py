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

def article_view(request):
    article_url = request.GET.get('url')
    if article_url:
        response = requests.get(article_url)
        article_content = response.text
    else:
        article_content = "No article URL provided."

    return render(request, 'newsapp/article.html', {'article_content': article_content})



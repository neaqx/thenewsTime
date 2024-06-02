from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from rest_framework import generics # type: ignore
from rest_framework.permissions import IsAuthenticated, AllowAny # type: ignore
from django.http import HttpResponse
from django.http import JsonResponse
from django.conf import settings
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
# 
from .forms import CreateUserForm


#Admin Panel










# Creating Login and Register views
def register(request):
    form =  CreateUserForm()


    if request.method == 'POST':
     form =  CreateUserForm(request.POST)
    if form.is_valid():
        form.save()
        return redirect('login')
        user = form.cleaned_data.get('username')
        messages.success(request, 'Account was created for ' + username)

    context = {'form': form}
    return render(request, 'newsapp/register.html', context)

def loginPage(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username = username, password = password)

        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.info(request, 'Username or Password is incorrect')


    context = {}
    return render(request, 'newsapp/login.html', context)






# Create your views here.
def home(request):
    return render(request, 'newsapp/home.html')

def politics(request):
    return render(request, 'newsapp/politics.html')

def business(request):
    return render(request, 'newsapp/business.html')

def technology(request):
    return render(request, 'newsapp/technology.html')








# Articel View
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
    response = request.get(api_url)
    data = response.json()
    article = data['response']['docs'][0] if data['response']['docs'] else None
    return JsonResponse(article, safe=False)



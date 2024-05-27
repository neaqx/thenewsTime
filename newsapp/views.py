from django.shortcuts import render
from django.contrib.auth.models import User
# from rest_framework import generics
# from rest_framework.permissions import IsAuthenticated, AllowAny
from django.http import HttpResponse



# Create your views here.


def home(request):
    return render(request, 'newsapp/home.html')

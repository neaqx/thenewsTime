from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics # type: ignore
from rest_framework.permissions import IsAuthenticated, AllowAny # type: ignore
from django.http import HttpResponse
from django.http import JsonResponse
from django.conf import settings



# Create your views here.


def home(request):
    return render(request, 'newsapp/home.html')


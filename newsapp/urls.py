from django.urls import path
from .views import home
from .views import article_view


urlpatterns = [
    path('', home, name='home'),
    path('article/', article_view, name='article_view'),
    
]





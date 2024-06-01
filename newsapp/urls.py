from django.urls import path
from .views import home
from .views import article_view


urlpatterns = [
    path('article/', article_view, name='article_view'),
  
    path('', home, name='home'),
    
]





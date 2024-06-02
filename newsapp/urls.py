from django.urls import path
from .views import home
from .views import article_view, politics, business, technology


urlpatterns = [
    path('article/', article_view, name='article_view'),
    path('politics/', politics, name='politics'),
    path('business/', business, name='business'),
    path('technology/', technology, name='technology'),
    path('', home, name='home'),
    
]





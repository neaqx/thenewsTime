from django.contrib import admin
from .models import Bookmark, Article, Comment

admin.site.register(Bookmark)
admin.site.register(Article)
admin.site.register(Comment)

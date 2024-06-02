from django.db import models
from django.contrib.auth.models import User


# Create your models here

#Bookmark Model
class Article(models.Model):
    title = models.CharField(max_length=200)
    url = models.URLField()

    def __str__(self):
        return self.title

class Bookmark(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('user', 'article')

    def __str__(self):
        return f"{self.user.username} bookmarked {self.article.title}"


#Comment Model
class Comment (models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    comment = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} commented on {self.article.title}"

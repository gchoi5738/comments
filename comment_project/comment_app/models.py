from django.db import models

# Create your models here.

class Comment(models.Model):
    text = models.TextField()
    author = models.CharField(max_length=100)
    date = models.DateTimeField()
    likes = models.IntegerField()
    image_url = models.URLField(blank=True)
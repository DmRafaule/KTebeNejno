from django.db import models

# Create your models here.

class Comment(models.Model):
    publishDate = models.DateField(null=True)
    rating = models.IntegerField(null=True)
    content = models.TextField(blank=True)

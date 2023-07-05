from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.cache import cache_page
from .models import Comment
# Create your views here.


#@cache_page(60*15)
def landing(request):
    comments = Comment.objects.all()
    context = {
        'comments' : comments
    }
    return render(request, 'Main/landing.html', context=context)

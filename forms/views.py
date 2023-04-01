from django.shortcuts import render
from django.shortcuts import render, redirect

# Create your views here.

from django.shortcuts import render

def index(request):
    return render(request, 'forms/home.html')

# def my_survey_view(request):
#     return render(request,"")
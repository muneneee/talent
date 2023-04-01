from django.urls import path
from. import views 



app_name= 'recommender'

urlpatterns =[
    path('', views.main, name='main'),
    ]
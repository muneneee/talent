from django.urls import path
from. import views 



app_name= 'forms'

urlpatterns =[
    path('home',views.index,name='index'),
	# path('', views.my_survey_view,name='my_survey_view'),
 
	
]
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

import pandas as pd
import numpy as np
import pickle 
import streamlit as st
from sklearn import preprocessing
from sklearn.preprocessing import LabelEncoder



# loading the pre-trained model
pickle_in = open('recommender/trained_model.pkl', 'rb')
classifier = pickle.load(pickle_in)


# defining the function which will make the prediction using the data which the user inputs
def recommendation(Grade, Percentage,Career_Category,Talent):
    # preprocessing user input
    if Grade =="E.E (Exceeds Exp)":
        Grade=3
    elif Grade =="A.E (Appr Exp)":
        Grade=2
    elif Grade=="M.E (Meet Exp)":
        Grade=1
    else:
        Grade=0
    
    Percentage=Percentage

    
    
    # remaining hobby and talent preprocessing
    
    if Career_Category =="Science engineering and technology":
        Career_Category=0
    elif Career_Category =="Social sciences":
        Career_Category=1
    elif Career_Category=="Arts and sport science":
        Career_Category=2
    else:
        Career_Category=0 
    
    if Talent=="painting":
        Talent=0
    if Talent =="coding":
        Talent=1
    elif Talent =="poetry":
        Talent=2
    elif Talent=="playing guitar":
        Talent=3
    if Talent=="painting":
        Talent=4
    if Talent =="baking":
        Talent=5
    elif Talent =="playing video games":
        Talent=6
    elif Talent=="music":
        Talent=7
    if Talent=="playing piano":
        Talent=8
    if Talent =="playing basketball":
        Talent=9
    elif Talent =="drawing":
        Talent=10
    elif Talent=="dancing":
        Talent=11
    if Talent=="playing chess":
        Talent=12
    if Talent =="skating":
        Talent=13
    elif Talent =="playing soccer":
        Talent=14
    elif Talent=="swimming":
        Talent=15
    if Talent=="art":
        Talent=16
    else:
        Talent=17
        
# making recommendations
    recommendation=classifier.predict(
        [[Grade,Percentage,Career_Category,Talent]])
    if recommendation==0:
        reco='Science Engineering and Technology'
    elif recommendation==1:
        
        reco="Social Sciences"
    elif recommendation==2:
        reco="Sports Science"
    
    elif recommendation==3:
        reco="Failed To recommend"
    return reco
                
# this is the main function in which we define our webpage
def main(request):
    if request.method == 'POST':
        # Get user input data
        Percentage = request.POST.get('Percentage')
        Grade = request.POST.get('Grade')
        Career_Category = request.POST.get('Career_Category')
        Talent = request.POST.get('Talent')
        
        # Make recommendation
        result = recommendation(Grade, Percentage, Career_Category, Talent)
        # if Percentage <= 50:
        #     result = "Failed"
        # if Grade == 'B.E (Below Exp)':
        #     result = "Failed"
        
        # Return result to the template
        return render(request, 'result.html', {'result': result})
    else:
        # Render the Streamlit app
        return render(request, 'streamlit.html')

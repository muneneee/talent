import pandas as pd
import numpy as np
import pickle 
import streamlit as st
from sklearn import preprocessing
from sklearn.preprocessing import LabelEncoder



# loading the pre-trained model
pickle_in = open('trained_model.pkl', 'rb')
classifier = pickle.load(pickle_in)

@st.cache()
# defining the function which will make the prediction using the data which the user inputs
def recommendation(Grade, Percentage, Talent,Career_Category):
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
        reco='is Science Engineering and Technology'
    elif recommendation==1:
        
        reco="is Social Sciences"
    elif recommendation==2:
        reco="is Sports Science"
    
    elif recommendation==3:
        reco="Failed To recommend"
    return reco
                
# this is the main function in which we define our webpage
def main():
    # front end elements of the web page
    html_temp = """ 
    <div style ="background-color:yellow;padding:13px"> 
    <h1 style ="color:black;text-align:center;">Career Recommendation WebAPP</h1> 
    </div> 
    """

    # display the front end aspect
    st.markdown(html_temp, unsafe_allow_html=True)

    # following lines create boxes in which user can enter data required to make prediction
    Percentage=st.number_input('percentage score')
    Grade=st.selectbox('Grade',('E.E (Exceeds Exp)','A.E (Appr Exp)','M.E (Meet Exp)','B.E (Below Exp)'))
    Career_Category=st.selectbox('Career_Category',('Science engineering and technology','Social sciences','Arts and sport science'))
    Talent=st.selectbox('Talent',('painting','coding','poetry','playing volleyball','playing guitar','baking','playing video games','music','playing piano','playing basketball','drawing','dancing','playing chess','skating','playing soccer','swimming','art','sports'))
    Hobby=st.selectbox('Hobby',('coding','swimming','baking','cooking','sports','collecting items','camping','reading'))

    result=""

    # when 'recommend' is clicked, make the recommendation and store it
    if st.button("Recommend"):
        result = recommendation(Grade, Percentage, Career_Category,Talent)
        if Percentage<=50:
            result="Failed"
        
        if Grade=='B.E (Below Exp)':
            result="Failed"
        st.success('Your Recomended Career Path  {}'.format(result))
        print(result)
if __name__ == '__main__':
    main()
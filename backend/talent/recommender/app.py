import pandas as pd
import numpy as np
import pickle 
import streamlit as st
from sklearn import preprocessing
from sklearn.preprocessing import LabelEncoder

st.set_page_config(page_title="Career Recommender",layout="wide", initial_sidebar_state="expanded")

# st.set_page_config(page_title="Career Recommender", page_icon="static/img/icon4.png",layout="wide", initial_sidebar_state="expanded")
st.title("Career Recommender")
# Load custom CSS
def load_css(file_name):
    with open(file_name) as f:
        
        st.markdown(f'<style>{f.read()}</style>', unsafe_allow_html=True)

load_css('static/style.css')


# loading the pre-trained model
pickle_in = open('trained_model.pkl', 'rb')
classifier = pickle.load(pickle_in)

@st.cache()
# defining the function which will make the prediction using the data which the user inputs
def recommendation(Grade, Percentage, Career_Category, Talent):
    # Convert Grade to numerical values
    if Grade == "E.E (Exceeds Exp)":
        Grade = 3
        grade_min, grade_max = 81, 100
    elif Grade == "M.E (Meet Exp)":
        Grade = 1
        grade_min, grade_max = 71, 80
    elif Grade == "A.E (Appr Exp)":
        Grade = 2
        grade_min, grade_max = 51, 70
    else:
        Grade = 0
        grade_min, grade_max = 0, 50
    
    # Check if Percentage is within the range of the selected Grade
    if Percentage < grade_min or Percentage > grade_max:
        st.warning(f"Percentage score {Percentage} is not within the range of {Grade}")
        return ""
    
    # Preprocess Career_Category and Talent
    if Career_Category == "Science engineering and technology":
        Career_Category = 0
    elif Career_Category == "Social sciences":
        Career_Category = 1
    elif Career_Category == "Arts and sport science":
        Career_Category = 2
    else:
        Career_Category = 0 
    
    if Talent == "painting":
        Talent = 0
    elif Talent == "coding":
        Talent = 1
    elif Talent == "poetry":
        Talent = 2
    elif Talent == "playing volleyball":
        Talent = 3
    elif Talent == "playing guitar":
        Talent = 4
    elif Talent == "baking":
        Talent = 5
    elif Talent == "playing video games":
        Talent = 6
    elif Talent == "music":
        Talent = 7
    elif Talent == "playing piano":
        Talent = 8
    elif Talent == "playing basketball":
        Talent = 9
    elif Talent == "drawing":
        Talent = 10
    elif Talent == "dancing":
        Talent = 11
    elif Talent == "playing chess":
        Talent = 12
    elif Talent == "skating":
        Talent = 13
    elif Talent == "playing soccer":
        Talent = 14
    elif Talent == "swimming":
        Talent = 15
    elif Talent == "art":
        Talent = 16
    else:
        Talent = 17
        
    # Make recommendations
    recommendation = classifier.predict([[Grade, Percentage, Career_Category, Talent]])
    if recommendation == 0:
        reco = "is Science Engineering and Technology"
    elif recommendation == 1:
        reco = "is Social Sciences"
    elif recommendation == 2:
        reco = "is Sports Science"
    else:
        reco = "Failed To recommend"
    return reco

                
# this is the main function in which we define our webpage
def main():
    # front end elements of the web page
    # html_temp = """ 
    # <body style="background-color:#d7ebf8;">
    # <div style="background-color:#F8D7DA;padding:10px;border-radius:10px">
    # <h1 style="color:#721c24;text-align:center;">Career Recommendation WebAPP</h1> 
    # </div> 
    # </body>
    # """

    # # display the front end aspect
    # st.markdown(html_temp, unsafe_allow_html=True)
    
    # following lines create boxes in which user can enter data required to make prediction
    Percentage=st.number_input('percentage score')
    Grade=st.selectbox('Grade',('E.E (Exceeds Exp)','A.E (Appr Exp)','M.E (Meet Exp)','B.E (Below Exp)'))
    Career_Category=st.selectbox('Career Category',('Science engineering and technology','Social sciences','Arts and sport science'))
    Talent=st.selectbox('Interest',('painting','coding','poetry','playing volleyball','playing guitar','baking','playing video games','music','playing piano','playing basketball','drawing','dancing','playing chess','skating','playing soccer','swimming','art','sports'))
    Hobby=st.selectbox('Hobby',('coding','swimming','baking','cooking','sports','collecting items','camping','reading'))

    result=""
    print(result)
    # when 'recommend' is clicked, make the recommendation and store it
    if st.button("Recommend"):
        result = recommendation(Grade, Percentage, Career_Category,Talent)
        # if Percentage>=90:
        #     Grade="E.E (Exceeds Exp)"
        
        
        st.success('Your Recomended Career Path  {}'.format(result))
        print(result)
if __name__ == '__main__':
    main()
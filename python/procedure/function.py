
# coding: utf-8

# In[4]:


#functions.py

from openpyxl import *
import math

def average(scores):
    #scores -> 점수리스트
    s = 0
    for score in scores:
        s += score
    return round(s / len(scores), 1)

def variance(scores, avrg): 
    s = 0
    for score in scores:
        s += (score - avrg)**2
    return round(s / len(scores), 1)


def std_dev(variance): 
    return round(math.sqrt(variance), 1)

def get_data_from_excel(filename): 
    raw_data = {}
    wb = load_workbook(filename)
    ws = wb.active
    g = ws.rows
    for k, v in g:
        raw_data[k.value] = v.value
    return raw_data


#total_avrg: 전체 평균, sd : user가 선택하는 기준 표준 편차
def evaluateClass(avrg, total_avrg, std_dev, sd):
    if avrg < total_avrg and std_dev > sd:
        print("성적이 너무 저조하고 학생들의 실력 차이가 너무 크다.")
    elif avrg > total_avrg and std_dev > sd:
        print("성적은 평균이상이지만 학생들 실력 차이가 크다. 주의 요망!")
    elif avrg < total_avrg and std_dev < sd:
        print("학생들간 실력차는 나지 않으나 성적이 너무 저조하다. 주의 요망!")
    elif avrg > total_avrg and std_dev < sd:
        print("성적도 평균 이상이고 학생들의 실력차도 크지 않다.")



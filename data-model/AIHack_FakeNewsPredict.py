import numpy as np
import pandas as pd
from sklearn.externals import joblib

file = open('../web-scrape/buffer.txt', 'r')
data = file.read()

data_arr = []
data_arr.append(data)

lr = joblib.load('AIHack_DataModel.pkl')
vectorizer = joblib.load('vectorizer.pkl')
transformer = joblib.load('transformer.pkl')

X_ka = vectorizer.transform(data_arr)
tfidf_ka = transformer.transform(X_ka)

lr_predict = lr.predict(tfidf_ka)
file = open('prediction.txt', 'w')
# print(lr_predict)
file.write(lr_predict)

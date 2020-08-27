---
repo_url: "https://github.com/Bambanah/CAB420-SentimentAnalysis"
title: "Sentiment Analysis"
image_name: "sentiment_analysis.jpg"
blurb: "Sentiment analysis of tweets regarding COVID-19."
tags: ["tensorflow", "pandas"]
---

The final group project of the CAB420 unit at QUT called for a problem of our choice to be solved using machine learning. As part of a group of four students, I helped design, train, and evaluate several machine learning algorithms to detect the sentiment level of tweets about COVID-19.

While searching for interesting problems to tackle we found [this dataset]() on Kaggle. When we found it, it had over 4 million entries and was constantly growing so we felt safe in assuming we had enough data to work with. At the time (March 2020), COVID-19 panic was at an all-time high so the problem space was extremely relevant.

## Models

We created several traditional classifiers and two recurrent neural networks (LSTM & GRU).

## Data

We used a dataset called Sentiment 140 for training the models, which contained roughly 1.6 million labelled tweets (way more than we needed) with sentiment labels of 1 or 0 (positive or negative).
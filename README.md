# Gasoly
A miles per gallon tracking tool with a side of price-at-the-pump history

## 2022.5.13 - oops
Left something in uri I shouldn't have. Fixed now though.


## 2022.5.10 - some updates already

bootstrapping the mongoDB example via
>npx create-next-app --example with-mongodb with-mongodb-app

thus the backend is somewhat built in now instead of bonus

## 2022.5.9 - First sprint roadmap:

2 main requirements to declare it functionally complete

1) Data entry page for 4 inputs: 
    - total miles
    - volume of gas on fill-up
    - price at pump
    - date

2) Visualization 
    - line graph of calculated miles per gallon per date and overall
    - line graph of price (at pump) history

Bonus:
3) start backend
    - save to database
    - import/export file(s)
    - login authentication
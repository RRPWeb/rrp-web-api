# rrp-web-api

The apis in this project will serve as backend for mobile app or webapp that can be developed for the collaboration between RTR activist who choose to be RRP members .
Public apis will provide information regarding activists and party activity for general public.

# Technology 

- The api is developed using nodejs,Express .
- Swagger is implemented for api documentation .
- The database used is mysql

# Demo and Hosting

https://rrp-web-api.herokuapp.com/
https://rrp-web-api.herokuapp.com/api-docs

# Project structure

- routes : maps Urls to controllers 
- middlewares : does pre-processing like authentication 
- controllers : first layer to recieve request and send it to service layer 
- services : holds business logic
- repositories : code to do some database operation 





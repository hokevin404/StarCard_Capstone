# Per Scholas Software Engineering Capstone Project

# Description
This project aims to create a full-stack web application using MongoDB, Express, React, and Node (MERN). 

The idea of this project was to create a web application where fans of Korean pop (K-pop) can buy and sell their celebrity photocards.
The Homepage consists of dummy listings of all created users. From the navigation bar, you can either login to your account or sign 
up for one. After logging in to your account, you'll will be brought to your account profile. 

The following list are feature I would like to implement in the future:
+ Payment system
+ Ability to favorite a listing
+ See number of views on your listing
+ Search function
+ See price history
+ Messaging system

# Technical Stack
Frontend: React

Backend: MongoDB

Build Tool: Vite

Styling: CSS

# Getting Started
### Prerequiste

Installed Node.js and npm

1) Clone repository
 ```
  git clone https://github.com/hokevin404/StarCard_Capstone.git
  cd StarCard_Capstone
```
2) Install  dependencies
```
npm i 
```
3) Create a .env file in the root directory and add your MongoDB URI and replace the user and password
```
ATLAS_URI=mongodb+srv://user:<password>@mongopractice.xfbul2m.mongodb.net/?retryWrites=true&w=majority&
appName=StarCard
PORT=3000
```
4) Run Application
```
npm start
```

# Backend Repo

https://github.com/hokevin404/StarCard_BE

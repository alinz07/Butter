# Propagatorz

## **Link to deployed app on heroku**:

</br>

## **Table of Contents**

-   [Motivation and Code Overview](#motivation-and-code-overview)
-   [Technologies Used](#technologies-used)
-   [User Story](#user-story)
-   [Instructions to Run App](#instructions-to-run-app)
-   [Screenshot](#screenshot)
-   [Contact Info/Maintainers](#contributors)
-   [Credits](#credits)

</br>

## **Motivation and Code Overview**

Propagatorz is a "plant help line" web application that allows users to share photos and notes regarding thier house plants.
Users will need to login or sign up first in order to start taking part in the discussions. Feel free to login with: betty@email.com and password: password. We're in the process of migrating the site to a faster host, but once accessed, the Single Page Application is very fast thanks to React. </br>

The app is organized in typical React fashion with a client folder and server folder. The server holds the db configuration, db models, schemas and utilities that support the models. The client folder holds all of the function components and page components as well as the build folder that uses webpack to minify and serve the React assets. The client side also has all of the mongoose and graphql queries/mutations/actions/reducers that are ran inside the components.

</br>

## **Technologies Used**

-   React
-   CSS Framework
-   [Mui](https://mui.com/material-ui/getting-started/installation/)
-   Node
-   Express
-   Bcrypt
-   MongoDB
-   Mongoose
-   GraphQL
-   Apollo Server
-   [Cloudinary](https://cloudinary.com/)
-   Nodemon
-   Day.js
-   JSON Web Tokens (JWT)

</br>

## **User Story**

As a catering business owner
I want a website where clients can book parties and I can manage events
So that my business gains a more professional reputation and is easier to manage

-   When a user visits the homepage <br/>
    then they get a brief description of my business and introductoy information about me

-   When they select a pricing nav <br/>
    then pricing information about my services is available

-   When they select book now <br/>
    then they are taken to a page where my calendar is visible

-   When they view the page with my calendar <br/>
    they they can see when I'm available and select a date/time to request a booking

-   When Eli views a booking request <br/>
    then he can choose to accept it or reject it

-   When Eli accepts a request <br/>
    then that time slot is filled on his calendar

-   When a user logs in <br/>
    then they are able to see if their request has been accepted or not

-   When a user is logged in <br/>
    then they can navigate to their events page

-   When a user selects an event <br/>
    then they are routed to a single event page where they are able to leave comments

-   When Eli logs in <br/>
    then he has a nav tab where he can view all booked events on one page

<br/>

## **Instructions to Run App**

1. Enter the following command in your terminal to clone the repository

```
git clone https://github.com/alinz07/Butter.git
```

2. Ensure you have Node.js installed on your machine. https://nodejs.org/en/download/

3. All NPM packages required for this application are already listed as dependencies in the root directory package.json file. cd into the root directory in your terminal command line and run the command 'npm i' in your terminal to install the necessary packages.

```
cd <dirname>
```

```
npm i
```

4. To run the application, enter the following command in the root directory

```
npm start
```

This will start the application on port 3001 of your local machine. Open your browser and navigate to localhost:3001.

</br>

## **Screenshot**

![Screenshot](./ImagesForReadMe/homepage.png) <br/>

</br>

## **Credits**

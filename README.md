# Currency Converter

A small web application I developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can convert from one currency to another and view statistics about the conversions made so far by all users. Notable libraries and tools that were involved are Ant Design, Redux, Saga, Reselect, Axios, Mongoose and Docker.

A brief demonstration of the application can be seen here: https://youtu.be/skysgXo0L_g

## How to Run

If you have Docker, pull the image with the following command…

`docker pull gorkemsahin/currency-converter:2`

…and run via:

`docker run -p 3000:3000 gorkemsahin/currency-converter:2`

Alternatively you can `npm install` on both /app and /app/server and `npm start` on /app to build the React app and serve it via Node.js backend.

Then the application should be accessible at http://localhost:3000

## Notes

Statistics and currency symbols were used in only one container here, so it didn’t make a lot of sense to use Redux but I wanted to demonstrate the way I use Redux, Saga and Reselect for app state management and implementation of middleware. I chose to store currency symbols and statistics in the app state because these were the data that was most likely to be reused in other screens/components later on if this web app was to be expanded with new features. I wanted to implement navigation too but I couldn’t find a good excuse to create another screen, so I left the router usage out.

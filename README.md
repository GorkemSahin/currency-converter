# Currency Converter

A small web application I developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can convert from one currency to another and view statistics about the conversions made so far by all users. Notable libraries and tools that were involved are Ant Design, Redux, Saga, Reselect, Axios and Mongoose.

A brief demonstration of the application can be seen here: https://youtu.be/skysgXo0L_g

## How to Run

If you have Docker, pull the image with the following command…

`docker pull gorkemsahin/currency-converter:2`

…and run via:

`docker run -p 3000:3000 gorkemsahin/currency-converter:2`

Alternatively you can `npm install` on both /app and /app/server and `npm start` on /app to build the React app and serve it via Node.js backend.

Then the application should be accessible at http://localhost:3000

## Notes

Statistics and currency symbols were used in only one container here, so it didn’t make a lot of sense to use Redux for app state management but I wanted to demonstrate the way I use Redux, Saga and Reselect for app state management and implementation of middleware. I chose to store currency symbols and statistics in the app state because these were the data that was most likely to be reused in other screens/components later on if this web app was to be expanded with new features.

I wanted to implement navigation too but I couldn’t find a good excuse to create another screen, so I left the router usage out. :)

I worked with Spring + MySQL + React tech stack as a full-stack developer for about one and a half years so I am comfortable with both coding in JavaScript and developing back-end services. That being said I had never used Node.js before. Please note that I had to learn Node.js in a day or so before I could start coding. I tried to apply the habits I acquired while working with Spring (such as having controller-service-repository-model layers, dependency injection, separation of concerns… etc.) to the extend I could, but I might have missed out on some best practices due to my lack of experience with Node.js, Express.js and MongoDB despite the research I made.

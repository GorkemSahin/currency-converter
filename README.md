# Currency Converter

A small web application I developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can convert from one currency to another and view statistics about the conversions made so far by all users.

## How to Run

If you have Docker, pull the image with the following command…

`docker pull gorkemsahin/currency-converter:2`

…and run via:

`docker run -p 3000:3000 gorkemsahin/currency-converter:2`

Alternatively you can `npm install` on both /app and /app/server and `npm start` on /app to build the React app and serve it via Node.js backend.

Then the application should be accessible at http://localhost:3030

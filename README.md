# A simple REST API echo server

A REST API to echo GET request bodies into the response. It makes use of Node.js and Express to easily expose an endpoint that simply reads the request body and returns it as is along with a 200 http status code. This repository corresponds to this [post](https://www.itjustmadesimple.com/2021/04/22/create-a-simple-rest-api-echo-service-with-node-js-and-express/) published at IT Just Made Simple blog.

## Usage

1. Clone this repository.

2. Install dependencies:

`npm install`

3. Run the server:

`npm start <port>`

*port* is optional and defaults to 3200.

Use an API client like Postman to test the service by sending a GET request to `http://localhost:<port>`

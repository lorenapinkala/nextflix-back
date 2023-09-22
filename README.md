# Netflix Backend - Movie API
This is the repository for the backend of **Nextflix**, the API that provides movie data and handles user authentication. This API is built in Node.js and integrates with a MongoDB database.

Environment Configuration (.env)

To run the Nextflix backend properly, you need to configure the following environment variables in a .env file at the root of the project. Below, these variables and their purposes are described:


-   MONGO_URL: This variable should contain the URL of your MongoDB database. Here's an example of how it should look:

plaintext

`MONGO_URL=mongodb+srv://dabasename:somename@cluster0.djsncs.mongodb.net/` 

-   SECRET: The SECRET variable is used to sign and verify JWT authentication tokens. You should set a secure secret value. For example:

plaintext

`SECRET=mySecretKey` 

-   API_KEY: Place your API key provided by The Movie Database here:

plaintext

`API_KEY=myApiKey123` 

-   API_TOKEN: If you use any authentication token to access external services or authenticate requests to your API, you should configure it here. In this example, a JWT token is shown:

plaintext

`API_TOKEN=Bearer dkfaeer3243` 

Remember that the .env file should be kept secure and should not be shared in public repositories.

Installation and Execution

Make sure you have Node.js installed on your system. Then, follow these steps to set up and run the Nextflix backend:

1.  Clone this repository to your local machine:

bash

`git clone https://github.com/lorenapinkala/nextflix-back.git` 

2.  Navigate to the project directory:

bash

`cd nextflix-back` 

3.  Install project dependencies:

bash

`npm install` 

4.  Create a .env file at the project's root and configure the environment variables as described above.
    
5.  Start the server:
    

bash

`npm start` 

The server will be running on the default port (usually 3000) and will be ready to handle requests from your frontend application.

# Todo Backend API

A simple and efficient backend API for managing a Todo application built with Node.js, Express.js, and PostgreSQL.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
  - [Endpoints](#endpoints)
- [Contributing](#contributing)
- [Contact](#contact)

## Features
- Manage Todo items with CRUD operations.
- RESTful API built with Node.js and Express.js.
- PostgreSQL as the database.
- CORS support for cross-origin requests.

## Getting Started

### Prerequisites
-  ( https://nodejs.org/docs/latest/api/ )   Node.js
- ( https://www.postgresql.org/download/ )   PostgreSQL 
- ( https://docs.npmjs.com/downloading-and-installing-node-js-and-npm )  npm 

### Installation

1. Clone the repository:
   ```bash

   git clone git@github.com:Vinayak-kumar-sharma/backend-todo-curd.git
   cd todo-backend
   ```
2. Install dependencies :
    ```bash
    npm install 
    ```
3. Set up the database:

    Create a PostgreSQL database.

    Update the DATABASE_URL in your environment variables.

4. Run database migrations:

5. Start the server:

## Usage

After starting the server, the API will be available at ( http://localhost:PortNumber ). 
You can use tools like Postman to interact with the endpoints.

## API Documentation

### Endpoints

#### Todos
  - Get all Todos
    - `GET /`
    - Resposne:

      ```json
      [
        {
          "id": 1,
          "title":"sample todo desc."
        }
      ]
      ```
  - Get a single Todo
    - ` GET /todo/:id`
    - Response:

      ```json
      {
        "id":1,
        "title":"sample todo desc."
      }
      ```
  - Create a Todo
    - `POST /todo`
    - Request:
      ```json
      {
        "title":"New todo"
      }
      ```
  - Update a Todo
    - `PUT /todos/:id`
    - Request
      ```json
      {
        "title":"Updated todo"
      }
      ```
  - Delete a Todo
    
    - ` DELETE /todo/:id`
    - Response:
    ```json
      {
        "message": "Todo was deleted!"
      }
      ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
  1. Fork the repository.

  2. Create a new branch ( `git checkout -b branch-name` ) .

  3. Commit your changes ( `git commit -m 'Add some feature` ).

  4. Push to the branch ( `git push origin branch-name` ).

  5. Open a pull request.

## Contact

Feel free to give your valuable feedback:

  - GitHub: Vinayak-kumar-sharma 

Happy Codding 🚀


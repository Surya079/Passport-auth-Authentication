# Passport-auth-Authentication

- _his project is an authentication system built using Node.js, Express, PostgreSQL, and Passport.js._

## Table of Contents

- Introduction
- Features
- Technologies Used
- Prerequisites
- Installation
- Configuration
- Running the Application
- API Endpoints
- License

## Introduction

- _This project demonstrates a simple authentication system, including user registration, login, and protected routes. It uses Passport.js for authentication and PostgreSQL as the database._

## Features

- User registration
- User login
- Protected routes
- Session management with Passport.js
- Secure password storage using bcrypt
- Technologies Used
- Node.js
- Express
- PostgreSQL
- Passport.js
- bcrypt
- dotenv
- Prerequisites

## _Make sure you have the following installed:_

```
    Node.js (version 14 or above)
    PostgreSQL
    Git
    Installation
    Clone the repository:

```

## bash

`Copy code`

```
    git clone https://github.com/yourusername/yourproject.git
```

`cd yourproject`

## Install dependencies:

bash
Copy code
npm install
Set up the database:

Create a PostgreSQL database and user, and ensure the user has appropriate privileges. Note down the database name, username, and password for configuration.

Configuration
Create a .env file in the root directory and add the following environment variables:

env
Copy code
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
SESSION_SECRET=your_session_secret
Initialize the database:

Use a tool like pgAdmin or the psql command line tool to run the SQL schema provided in schema.sql or write the necessary SQL commands to create the required tables.

Running the Application
Start the server:

bash
Copy code
npm start
The server should be running at http://localhost:3000.

API Endpoints
Authentication Routes
Register a new user:

http
Copy code
POST /register
Request Body:

json
Copy code
{
"username": "yourusername",
"password": "yourpassword"
}
Login:

http
Copy code
POST /login
Request Body:

json
Copy code
{
"username": "yourusername",
"password": "yourpassword"
}
Logout:

http
Copy code
GET /logout
Protected Routes
Example protected route:

http
Copy code
GET /protected
This route is protected and requires authentication. It can be accessed only after logging in.

License
This project is licensed under the MIT License. See the LICENSE file for details.

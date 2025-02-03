# User Categories API

A NestJS based REST API for managing users and their assigned categories.


## Description

This API provides endpoints to:
- Create users with their assigned categories
- Retrieve user information including their categories
- Uses SQLite database with TypeORM
- Includes Swagger documentation


## Installation

```bash
npm install
```

## Database Setup

This project uses SQLite with TypeORM. Follow these steps to set up the database:

```bash
# Generate a new migration
$ npm run migration:generate

# Run migrations
$ npm run migration:run

# Revert last migration (if needed)
$ npm run migration:revert
```

## Running the app


```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## API Documentation

After starting the application, visit:
```
http://localhost:3000/api
```
This will open the Swagger UI where you can:
- View all available endpoints
- Test the API directly
- See request/response schemas

## Unit Test

```bash
$ npm run test
```

## API Endpoints

### Create User
- **POST** `/users`
- Creates a new user with categories
- Request body example:
```json
{
  "email": "user@example.com",
  "categories": [1, 2, 3]
}
```

### Get User
- **GET** `/users/:email`
- Retrieves user information by email
- Response example:
```json
{
  "email": "user@example.com",
  "categories": [1, 2, 3]
}
```

## Project Structure
```
src/
├── config/            # Configuration files
├── migrations/        # Database migrations
└── users/             # Users module
    ├── dto/           # Data Transfer Objects
    ├── entities/      # Database entities
    └── tests/         # Test files
```
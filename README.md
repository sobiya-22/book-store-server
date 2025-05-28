# Book Store REST API

A simple REST API for managing a book store built with Node.js, Express, and MongoDB.

## Features

- CRUD operations for books
- MongoDB database integration
- RESTful API endpoints
- Input validation
- Error handling

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/bookstore
   ```

## Running the Application

npm run dev
```



## API Endpoints

- `GET /books` - Get all books
- `POST /books` - Create a new book
- `PUT /books/:id` - Update a book
- `DELETE /books/:id` - Delete a book


# School Management API

## Tech Stack
- Node.js
- Express.js
- MySQL

## APIs

### 1. Add School
POST /api/addSchool

Body:
{
  "name": "ABC School",
  "address": "Delhi",
  "latitude": 28.7041,
  "longitude": 77.1025
}

### 2. List Schools
GET /api/listSchools?latitude=28.7&longitude=77.1

## How to Run
1. npm install
2. node server.js

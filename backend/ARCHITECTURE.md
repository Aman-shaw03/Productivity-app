# Todo CRUD Backend - Architecture Guide

## 📁 Project Structure

```
backend/
├── config/
│   └── db.config.js          # Database configuration (Sequelize)
├── controllers/
│   └── todo.controller.js    # Business logic for todos
├── middlewares/
│   └── errorHandler.js       # Error handling & 404 middleware
├── models/
│   ├── index.js              # Export all models
│   └── todo.model.js         # Todo database model
├── routes/
│   └── todo.routes.js        # API endpoints
├── .env                       # Environment variables
├── docker-compose.yml         # PostgreSQL Docker setup
├── server.js                  # Express app entry point
└── package.json              # Dependencies
```

## 🔄 How It Works (Data Flow)

```
HTTP Request
    ↓
Express Router (routes/todo.routes.js)
    ↓
Controller (controllers/todo.controller.js) - Business Logic
    ↓
Model (models/todo.model.js) - Database Schema
    ↓
Sequelize ORM
    ↓
PostgreSQL Database (Docker)
    ↓
Response back to Client
```

## 🚀 How to Run

### 1. Start PostgreSQL Docker container

```bash
docker-compose up -d
```

This will:

- Start a PostgreSQL container
- Create a database called `todo_db`
- Username: `aman_user`, Password: `mysecretpassword`
- Port: `5432`

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm run dev
```

Server will run on `http://localhost:3000`

## 📡 API Endpoints

- **POST** `/api/todos` - Create a new todo
- **GET** `/api/todos` - Get all todos
- **GET** `/api/todos/:id` - Get a specific todo
- **PUT** `/api/todos/:id` - Update a todo
- **DELETE** `/api/todos/:id` - Delete a specific todo
- **DELETE** `/api/todos` - Delete all todos

## 📝 Example Requests

### Create a Todo

```json
POST /api/todos
{
  "title": "Learn Sequelize",
  "description": "Master Sequelize ORM",
  "completed": false
}
```

### Update a Todo

```json
PUT /api/todos/1
{
  "title": "Learn Sequelize",
  "completed": true
}
```

### Testing with cURL

```bash
# Create
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"My First Todo","description":"Testing the API"}'

# Get all
curl http://localhost:3000/api/todos

# Get one
curl http://localhost:3000/api/todos/1

# Update
curl -X PUT http://localhost:3000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'

# Delete
curl -X DELETE http://localhost:3000/api/todos/1
```

## 🔧 Key Technologies Explained

### Sequelize (ORM)

- **What**: Object-Relational Mapping - converts database rows to JavaScript objects
- **Why**: Easier to work with data without writing raw SQL
- **Example**: `Todo.findAll()` instead of `SELECT * FROM todos`

### PostgreSQL with Docker

- **What**: Database runs in an isolated container
- **Why**: No need to install PostgreSQL locally, reproducible environment
- **How**: `docker-compose.yml` automatically sets it up

### Environment Variables (.env)

- **What**: Store sensitive configs (passwords, URLs) separately
- **Why**: Don't commit passwords to git, easy to change between dev/production

## 💡 Learning Tips for Rebuilding

When you rebuild this yourself:

1. Start with the model (define table structure)
2. Create the controller (write the logic)
3. Create the routes (connect endpoints to controllers)
4. Update server.js (connect everything)
5. Test each endpoint with cURL or Postman

## 🐛 Debugging

If something doesn't work:

1. Check MongoDB is running: `docker ps`
2. Check server logs in terminal
3. Verify .env variables are correct
4. Check network/firewall settings
5. Look at the actual error message!

---

Good luck rebuilding this! You've got this! 💪

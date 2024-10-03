

# Student-Course API

A RESTful API built with **Express** and **TypeORM** to manage Students and Courses. This project demonstrates advanced API features such as error handling, custom middlewares, and environment variable management.

## Features

- **CRUD operations** for managing students and courses.
- **Many-to-Many relationship** between students and courses.
- Centralized **error handling** using custom middleware.
- Environment configuration with **dotenv**.
- Detailed and consistent success/error responses.
- **TypeORM** for database management.

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **SQLite** (default database)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/student-course-api.git
cd student-course-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of your project to manage your environment variables. For example:

```
PORT=3000
NODE_ENV=development
```

### 4. Initialize the Database

The database will be automatically created and synchronized based on your TypeORM entity configuration. The database will use SQLite by default.

### 5. Run the Application

To start the server in development mode:

```bash
npm run dev
```

To build and run the production version:

```bash
npm run build
npm start
```

### 6. Access the API

Once the server is running, you can access the API at:

```
http://localhost:3000
```

## API Endpoints

### GET `/students`

Fetch all students, including the courses they are attending.

**Response Example:**

```json
{
  "status": "success",
  "students": [
    {
      "id": 1,
      "nameOfStudent": "Sophia",
      "courseAttend": [
        {
          "id": 1,
          "courseName": "Mathematics",
          "duration": 30
        },
        {
          "id": 2,
          "courseName": "Physics",
          "duration": 40
        }
      ]
    }
  ]
}
```

### GET `/students/:id`

Fetch a single student by ID, including the courses they are attending.

**Response Example:**

```json
{
  "status": "success",
  "student": {
    "id": 1,
    "nameOfStudent": "Sophia",
    "courseAttend": [
      {
        "id": 1,
        "courseName": "Mathematics",
        "duration": 30
      }
    ]
  }
}
```

### POST `/students`

Create a new student.

**Request Body Example:**

```json
{
  "nameOfStudent": "John Doe",
  "courses": [1, 2]  // Course IDs
}
```

**Response Example:**

```json
{
  "status": "success",
  "student": {
    "id": 3,
    "nameOfStudent": "John Doe",
    "courseAttend": [
      {
        "id": 1,
        "courseName": "Mathematics",
        "duration": 30
      }
    ]
  }
}
```

### DELETE `/students/:id`

Delete a student by ID.

**Response Example:**

```json
{
  "status": "success",
  "message": "Student with ID 3 deleted successfully"
}
```

## Error Handling

- If an entity (like a student or course) is not found, a `404` error is returned with a custom message.
- Validation errors will return a `400` response with details about the invalid input.
- All errors are centrally handled via custom middleware.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

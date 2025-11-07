# Student Portal Backend

A secure and scalable backend API for a student management system built with Node.js, Express, and MongoDB. This application provides comprehensive functionality for managing students, assignments, announcements, and submissions with robust authentication and authorization.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Version Control](#version-control)

## ✨ Features

- **User Authentication & Authorization**
  - Firebase Authentication integration
  - JWT-based session management
  - Role-based access control (Admin/Student)

- **Student Management**
  - User profile management
  - Secure registration and login

- **Assignment Management**
  - Create, read, update, and delete assignments
  - Assignment submission tracking
  - File upload support via Cloudinary

- **Announcement System**
  - Admin announcements broadcast
  - Real-time updates for students

- **Security Features**
  - Password hashing with bcryptjs
  - Protected routes with middleware
  - Input validation and sanitization
 
  Project/
├── controllers/ # Business logic and request handlers
│ ├── adminController.js
│ └── authController.js
├── middleware/ # Authentication and validation middleware
│ ├── adminAuth.js
│ └── auth.js
├── models/ # MongoDB schemas and models
│ ├── Announcement.js
│ ├── Assignment.js
│ ├── Submission.js
│ └── User.js
├── routes/ # API route definitions
│ ├── admin.js
│ └── auth.js
├── tests/ # Test files
├── .env # Environment variables (not in repo)
├── server.js # Application entry point
└── package.json # Dependencies and scripts

text

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Firebase project credentials
- Cloudinary account

### Steps

1. **Clone the repository**
git clone https://github.com/yourusername/student-portal-backend.git
cd student-portal-backend

text

2. **Install dependencies**
npm install

text

3. **Set up environment variables**

Create a `.env` file in the root directory:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

text

4. **Configure Firebase**
- Download your Firebase Admin SDK service account key
- Place it in the project root or configure environment variables

## ⚙️ Configuration

The application uses environment variables for configuration. Ensure all required variables in `.env` are properly set before running the application.

## 🏃 Running the Application

### Development Mode
npm run dev

text
Server runs on `http://localhost:5000` with auto-restart on file changes.

### Production Mode
npm start

text

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /register` - Register a new user
- `POST /login` - User login
- `GET /profile` - Get user profile (Protected)

### Admin Routes (`/api/admin`)
- `POST /announcements` - Create announcement (Admin only)
- `GET /announcements` - Get all announcements
- `POST /assignments` - Create assignment (Admin only)
- `GET /assignments` - Get all assignments
- `POST /submissions/:id` - Submit assignment (Student)

## 🧪 Testing

### Run Unit Tests
npm test

text

### Run Mutation Testing
npx stryker run

text

### Test Coverage
- **Mutation Score:** 2.52%
- **Test Framework:** Jest with Node.js test environment
- **Coverage Reports:** Available in `reports/mutation/` directory

## 🔧 Version Control

This project uses Git for version control. Key commits include:

1. Initial project setup and dependencies
2. Database models implementation
3. Authentication and authorization logic
4. API routes configuration
5. Testing framework integration

## 📝 License

This project is for educational purposes as part of a Software Engineering course assignment.

## 👥 Contributors

- Your Name - [GitHub Profile](https://github.com/yourusername)

## 📞 Contact

For any queries, reach out at: your.email@example.com

---

**Last Updated:** November 7, 2025


## 🛠️ Tech Stack

- **Runtime:** Node.js (v22.18.0)
- **Framework:** Express.js (v4.18.2)
- **Database:** MongoDB with Mongoose ODM (v8.19.2)
- **Authentication:** Firebase Admin SDK (v13.4.0),

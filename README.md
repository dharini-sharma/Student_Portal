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

## 🛠️ Tech Stack

- **Runtime:** Node.js (v22.18.0)
- **Framework:** Express.js (v4.18.2)
- **Database:** MongoDB with Mongoose ODM (v8.19.2)
- **Authentication:** Firebase Admin SDK (v13.4.0),

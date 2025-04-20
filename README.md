# 🍽️ The Digital Diner

A full-stack restaurant ordering system prototype that allows users to browse the menu, add items to their cart, and place pickup orders online. Built with the **MERN stack**, this project is designed to demonstrate a clean, functional approach to managing restaurant operations without overwhelming complexity.

**Frontend Live Demo:**  
🔗 [https://digital-diner-kaushal.netlify.app/](https://digital-diner-kaushal.netlify.app/)

---

## 📌 Project Overview

**The Digital Diner** provides:

- A dynamic menu browsing experience
- Cart management
- Order placement with basic contact info
- Order history lookup by phone number
- Responsive UI using Tailwind CSS

---

## 🛠️ Tech Stack

| Layer         | Technology                |
|--------------|---------------------------|
| Frontend     | React, Tailwind CSS       |
| State Mgmt   | React Context API         |
| Backend      | Node.js, Express          |
| Database     | MongoDB (via Mongoose)    |
| Deployment   | Netlify (Frontend)        |

---

## 🧠 Why MongoDB over PostgreSQL?

### ✅ Flexibility for Menu Data
Menu items often contain semi-structured or optional fields such as:
- `imageUrl`, `tags`, `description`, `customizations`, etc.

MongoDB allows schema-less flexibility, making it ideal for dynamic and evolving menu structures without enforcing rigid rules.

### ✅ Developer Speed & Simplicity
MongoDB enables rapid development, especially in early-stage projects or prototypes. With Mongoose, validation and modeling become easier without setting up extensive schemas or dealing with complex joins.

### ✅ Natural Fit for Orders
Order objects contain arrays of items, total amount, and customer contact info. This structure is perfectly suited for MongoDB’s nested document model, which makes retrieval and storage more efficient without needing relational mapping.

### ✅ Future-Ready for Scalability
MongoDB scales horizontally and is a great fit for modern, high-speed web applications where read-heavy workloads (like fetching menus/orders) are common.

---

## ⚙️ Setup Instructions

### 🧪 Prerequisites

- Node.js & npm
- MongoDB installed locally or use MongoDB Atlas
- Git

---

### 🔧 Backend Setup


git clone https://github.com/kaushalkrsna1602/digital-diner-backend
cd digital-diner-backend
npm install

Create .env file in /server with:
PORT=5000
MONGO_URI=mongodb://localhost:27017/digital-diner

Start Server : npm run dev


### 🔧 Frontend Setup

git clone https://github.com/kaushalkrsna1602/digital-diner-frontend
cd digital-diner-frontend
npm install
npm run dev 

📦digital-diner
 ┣ 📂frontend           # React Frontend
 ┃ ┣ 📂src
 ┃   ┣ 📂components     # UI Components & Pages
 ┃   ┣ 📂context        # Cart Context & Config
 ┃   ┗ App.jsx
 ┣ 📂backend           # Express + MongoDB Backend
 ┃ ┣ 📂src
 ┃   ┣ 📂models         # Mongoose Schemas
 ┃   ┣ 📂routes         # API Route Handlers
 ┃   ┣ server.js        # Express App Entry Point
 ┃   ┗ config.js        # DB Connection
 ┣ README.md


Author : 

Kaushal Kumar
Internship Assessment Submission for Eatoes

# Summer Internship Week 2: Backend Basics (Node.js \& Express.js)

Welcome to Week 2 of your Summer Internship at **Next Gen Software Hub Pvt. Ltd.**! This week is dedicated to building a strong foundation in backend development using Node.js and Express.js. By the end of this week, you’ll understand how to create, test, and document REST APIs-the backbone of modern web applications.

---

## Table of Contents

- [Overview](#overview)
- [Learning Objectives](#learning-objectives)
- [Node.js: Introduction](#nodejs-introduction)
- [Express.js: Introduction](#expressjs-introduction)
- [Setting Up Your Project](#setting-up-your-project)
- [Building a Simple REST API](#building-a-simple-rest-api)
- [CRUD Operations Explained](#crud-operations-explained)
- [Testing Your API with Postman](#testing-your-api-with-postman)
- [Best Practices](#best-practices)
- [Useful Resources](#useful-resources)

---

## Overview

This week, you will:

- Learn the basics of Node.js and Express.js
- Create a simple REST API implementing CRUD (Create, Read, Update, Delete) operations
- Test your API endpoints using Postman
- Explore best practices for backend development and API design

---

## Learning Objectives

- Understand what Node.js and Express.js are and why they are used
- Set up a backend project from scratch
- Implement and test RESTful API endpoints
- Grasp the fundamentals of HTTP methods and status codes
- Document and organize your code for maintainability

---

## Node.js: Introduction

Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript code on the server side. It is widely used for building scalable and efficient backend services.

**Example: Basic Node.js HTTP Server**

```js
const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) =&gt; {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () =&gt; {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

Save this as `server.js` and run with `node server.js` to start a basic server[^2].

---

## Express.js: Introduction

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies routing, middleware integration, and request/response handling[^5].

**Example: Basic Express.js App**

```js
const express = require('express');
const app = express();

app.get('/', (req, res) =&gt; {
  res.send('Hello World!');
});

app.listen(3000, () =&gt; {
  console.log('Express App running at http://127.0.0.1:3000/');
});
```

This code sets up a simple web server that responds with "Hello World!" when the root URL is accessed[^5].

---

## Setting Up Your Project

1. **Install Node.js:** Download and install from the [official website](https://nodejs.org/).
2. **Initialize a new project:**

```bash
mkdir my-rest-api
cd my-rest-api
npm init -y
```

3. **Install Express.js:**

```bash
npm install express
```

4. **(Optional) Install Nodemon for auto-reloading:**

```bash
npm install --save-dev nodemon
```

---

## Building a Simple REST API

A REST API allows clients to interact with your server using standard HTTP methods. Below is a simple example implementing CRUD operations for a list of users (using an in-memory array for demonstration).

```js
const express = require('express');
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// Read (GET)
app.get('/users', (req, res) =&gt; {
  res.json(users);
});

// Create (POST)
app.post('/users', (req, res) =&gt; {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});

// Update (PUT)
app.put('/users/:id', (req, res) =&gt; {
  const user = users.find(u =&gt; u.id == req.params.id);
  if (!user) return res.status(404).send('User not found');
  user.name = req.body.name;
  res.json(user);
});

// Delete (DELETE)
app.delete('/users/:id', (req, res) =&gt; {
  users = users.filter(u =&gt; u.id != req.params.id);
  res.status(204).send();
});

app.listen(3000, () =&gt; console.log('Server running on port 3000'));
```

This code demonstrates how to handle different HTTP requests for CRUD operations[^7][^12].

---

## CRUD Operations Explained

| Operation | HTTP Method | Express Function  | Example Endpoint | Description             |
| :-------- | :---------- | :---------------- | :--------------- | :---------------------- |
| Create    | POST        | app.post()        | /users           | Add a new user          |
| Read      | GET         | app.get()         | /users           | Get all users           |
| Update    | PUT/PATCH   | app.put()/patch() | /users/:id       | Update an existing user |
| Delete    | DELETE      | app.delete()      | /users/:id       | Remove a user           |

Each function corresponds to a standard HTTP method, making your API RESTful and easy to consume[^7][^8].

---

## Testing Your API with Postman

**Postman** is a popular tool for testing APIs. Here’s how you can use it:

1. **Download and install Postman** from [postman.com](https://www.postman.com/).
2. **Create a new request:** Select the HTTP method (GET, POST, PUT, DELETE), enter your API endpoint (e.g., `http://localhost:3000/users`), and add any necessary request body or headers.
3. **Send the request:** Click "Send" and view the response, including status code and returned data.
4. **Organize requests:** Use Postman Collections to group related requests for better organization and automation[^9][^11][^13][^14].

**Tip:** You can automate tests, use variables, and even run collections as part of your CI/CD pipeline.

---

## Best Practices

- **Use proper HTTP methods and status codes** (e.g., 200 for success, 201 for resource creation, 404 for not found, 500 for server errors)[^8].
- **Structure your routes using nouns** (e.g., `/users`, `/tasks`), not verbs.
- **Validate input data** to prevent errors and security issues.
- **Organize code into modules** as your project grows.
- **Document your API** for easy collaboration and future maintenance.

---

## Useful Resources

- [Node.js Guide](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)[^2]
- [Express.js Docs](https://expressjs.com/)[^5]
- [CRUD in Express.js - Scaler Topics][^7]
- [Testing APIs with Postman][^9][^11][^13][^14]
- [REST API Creation \& Testing with Postman][^10]

---

## Conclusion

By the end of this week, you will have hands-on experience in building and testing a REST API using Node.js and Express.js. These are essential skills for any backend developer and form the core of modern web application development.

Happy coding and exploring! 🚀

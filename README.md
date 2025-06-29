#  T-Shirt API (Node.js + Express)

This is a simple RESTful API built using Node.js and Express. It serves a basic `/tshirt` endpoint that returns information about a T-shirt.

##  Project Structure

```
tshirt-api/
│
├── index.js          # Main server file
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation
```

---

##  Requirements

- [Node.js](https://nodejs.org/en/) (v16+ recommended)
- npm (comes with Node.js)

---

##  Getting Started

Follow the steps below to set up and run the API on your local machine:

### 1.  Clone the Repository

```bash
git clone https://github.com/Creativedelight/REST-API-nodejs-express-.git
cd tshirt-api
```

> Replace the URL above with your actual GitHub repository URL if different.

---

### 2.  Install Node.js

Download and install Node.js from the official website:  
 [https://nodejs.org/](https://nodejs.org/)

To confirm installation:
```bash
node -v
npm -v
```

---

### 3.  Install Project Dependencies

```bash
npm install
```

---

### 4.  Install Nodemon (Optional for Auto-Restarting)

To avoid manually restarting the server after every change, install Nodemon globally:
```bash
npm install -g nodemon
```

Or add it to your project as a dev dependency:
```bash
npm install --save-dev nodemon
```

Update your `package.json` to include:
```json
"scripts": {
  "start": "nodemon index.js"
}
```

---

### 5.  File Overview (`index.js`)

Here is the core server code used:

```js
const express = require('express');
const app = express();
const PORT = 8000;

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        name: 'cool-tshirt',
        price: 3000,
        description: 'this is a cool tshirt'
    });
});

app.listen(PORT, () => {
    console.log(`server is live on http://localhost:${PORT}`);
});
```

---

##  Run the Server

```bash
npm start
```

You should see:
```
server is live on http://localhost:8000
```

---

##  Test the API

You can test the endpoint using Postman or your browser:

### `GET /tshirt`
```http
http://localhost:8000/tshirt
```

**Response:**
```json
{
  "name": "cool-tshirt",
  "price": 3000,
  "description": "this is a cool tshirt"
}
```

---

##  Author

Faith Munuhe

---



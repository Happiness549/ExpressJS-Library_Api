# Library Management REST API

## Project Description

This project is a RESTful API for a local community library system. It manages two resources: **Authors** and **Books**.

The API allows users to:

* Create, view, update, and delete authors.
* Create, view, update, and delete books.
* Link each book to an author using `authorId`.
* View all books belonging to a specific author.
* Validate input data.
* Handle errors such as invalid data, missing resources, and duplicate books.

The project uses **in-memory arrays** to store the data instead of a database.

## Tech Stack

* Node.js
* Express.js
* TypeScript
* Express Validator
* Postman

## Installation and Setup

### 1. Clone the Project

Clone the repository using Git:

```bash
git clone <your-github-repository-url>
```

Move into the project folder:

```bash
cd <project-folder-name>
```

### 2. Initialise the Project

If setting up the project from scratch:

```bash
npm init -y
```

Install Express:

```bash
npm install express
```

Install Express Validator:

```bash
npm install express-validator
```

Install TypeScript and the required development dependencies:

```bash
npm install -D typescript ts-node @types/node @types/express
```

### 3. Initialise TypeScript

```bash
npx tsc --init
```

Configure the TypeScript settings in `tsconfig.json` for the project.

### 4. Run the Project

Start the development server using the project's configured development script:

```bash
npm run dev
```

The API will run on:

```text
http://localhost:3000
```


## Project Structure

```text
src/
├── controllers/
│   ├── author.ts
│   └── books.ts
├── middleware/
│   └── middleware.ts
├── models/
│   ├── author.ts
│   └── books.ts
├── routes/
│   ├── author.ts
│   └── books.ts
└── app.ts
```

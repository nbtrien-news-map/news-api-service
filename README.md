# News API Service

A backend service built with Node.js, Express, and TypeScript, designed to provide a robust API for managing and serving news-related data. It uses TypeORM for database interactions with PostgreSQL and supports WebSocket for real-time updates.

## Features

- RESTful API built with Express.js
- PostgreSQL integration using TypeORM
- WebSocket support via `ws`
- Input validation with `express-validator`
- Modular project structure with support for module aliasing
- Environment configuration via `.env`
- Linting and formatting with ESLint and Prettier

## Technologies Used

- **Node.js**: Runtime environment for executing JavaScript server-side.
- **Express**: Web framework for building RESTful APIs.
- **TypeScript**: Adds static types to JavaScript for better code reliability.
- **TypeORM**: ORM for PostgreSQL database interactions.
- **WebSocket (ws)**: For real-time bidirectional communication.
- **PostgreSQL**: Relational database for storing news data.
- **ESLint & Prettier**: For code linting and formatting.
- **Nodemon**: For automatic server restarts during development.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20.x or higher
- **npm**: Version 9.x or higher
- **PostgreSQL**: Version 13 or higher
- **Git**: For version control

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/nbtrien-news-map/news-api-service
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up PostgreSQL**:
    - Ensure PostgreSQL is running locally or on a remote server.
    - Create a database for the project (e.g., `news_api_db`).

4. **Set up environment variables**:
    - Create a `.env` file in the root directory.
    - Configure the necessary variables (see [Environment Variables](#environment-variables)).

## Running the Application

1. **Development mode**:

    ```bash
    npm run dev
    ```

    The server will start with `nodemon` and automatically restart on code changes. The API will be available at `http://localhost:3000` (or the port specified in `.env`).

2. **Build for production**:

    ```bash
    npm run build
    ```

3. **Start in production**:
    ```bash
    npm start
    ```

## Available Scripts

- `npm run dev`: Starts the development server with `nodemon`.
- `npm run build`: Compiles TypeScript to JavaScript.
- `npm start`: Runs the compiled JavaScript application.
- `npm run lint`: Runs ESLint to check for code issues.
- `npm run format`: Formats code with Prettier.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=password@123
DB_DATABASE=news_api_db
ALLOWED_ORIGINS=http://localhost:5173
```

- `PORT`: The port the server runs on.
- `DB_*`: PostgreSQL connection details.

## Author

- GitHub: [nbtrien](https://github.com/nbtrien)
- Website: [portfolio.nbtrien.site](https://portfolio.nbtrien.site)
- Email: trienbanguyen@gmail.com

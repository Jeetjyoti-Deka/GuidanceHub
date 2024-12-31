# Guidance Hub

**Guidance Hub** is a mentorship connection application designed to help users find mentors and mentees based on their goals and expertise. The platform connects mentors and mentees in a professional network, similar to LinkedIn but with a primary focus on mentorship.

## Tech Stack

- **Frontend**: Next.js
- **Backend**: Node.js with Express
- **Database**: PostgreSQL
- **Docker**: Backend and database are containerized using Docker

## Features

- User authentication using Google Sign-In
- JSON Web Tokens (JWT) for session management
- Dockerized backend and PostgreSQL database for easy setup and deployment
- Mentorship profiles and connection features
- Responsive design and modern user interface

## Setup

### Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Steps to Set Up Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/guidance-hub.git
   cd guidance-hub
   cd backend
   npm install
   ```
2. **Set up environment variables**:
   
   Create a .env file in the backend directory and add your configuration values. An example .env file might look like:
      ```bash
      POSTGRES_DB_USER=postgres
      POSTGRES_DB_PASSWORD=password
      POSTGRES_DB_NAME=mydatabase
      POSTGRES_DB_HOST=postgres
      POSTGRES_DB_PORT=5432
      GOOGLE_CLIENT_ID=your-google-client-id
      GOOGLE_CLIENT_SECRET=your-google-client-secret
      JWT_SECRET=your-secret-key
      JWT_TIMEOUT="12h"
      NODE_ENV=development
      Replace the placeholder values with actual credentials.
      ```

    Create a .env file in the frontend directory and add your configuration values. An example .env file might look like:
    ```bash
    GOOGLE_CLIENT_ID=your-google-client-id
    Replace the placeholder values with actual credentials.
    ```
3. **Run the Backend and Database with Docker**:

    The backend and PostgreSQL database are containerized with Docker. Run the following command to start the containers:
    
    ```bash
    make build_server
    ```
    This will:
    
    Build and start the Docker containers for the backend and PostgreSQL database.
    Expose the app on port 3001.
4. **Run migrations**:
   To setup Database Tables and to create dummy users run the following commands:
   
   ```bash
   docker exec -it server sh
   npx db-migrate up initialize
   ```
   The backend setup is now complete.
5. **Install Frontend Dependencies**:

    Navigate to the frontend directory and install the necessary dependencies:
    
    ```bash
    cd frontend
    npm install
    ```
6. **Start the Frontend**:

    Now, you can run the frontend:
    
    ```bash
    npm run dev
    ```
7. Access the App:

    - Backend: http://localhost:3001
    - Frontend: http://localhost:3000
   
    Your app should now be running locally with both the frontend and backend connected.

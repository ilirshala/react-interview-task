
# Jobsite Management Application

This is a simple application for managing job sites. Users can add jobsites with a name, category, and status. Clicking on a jobsite allows users to view more details, including services grouped by category.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ilirshala/react-interview-task
   cd react-interview-task/interview-task
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Application

1. **Start the Backend (Mocked with JSON Server):**
   - The backend is mocked using JSON Server.
   - To start the backend, run:
     ```bash
     npm run backend
     ```
   - JSON Server will start, providing endpoints to manage job sites data.

2. **Start the Frontend:**
   - Run the frontend application using:
     ```bash
     npm start
     ```
   - This will open the application in development mode at `http://localhost:3000`.

## Security Enhancements

Here are some potential steps to make this application more secure:

1. **Authentication and Authorization**:
   - Implement an authentication layer using JWT (JSON Web Tokens) or OAuth to ensure that only authorized users can access or modify jobsite data.
   - Enforce role-based access control (RBAC) to restrict access based on user roles (e.g., admin, viewer).

2. **Input Validation and Sanitization**:
   - Validate and sanitize all inputs (especially jobsite names, categories, and statuses) to prevent injection attacks.
   - Use libraries like `validator` for frontend input validation and ensure similar validations on the backend.

3. **Rate Limiting**:
   - Implement rate limiting on the backend to prevent abuse, such as repetitive data requests or malicious activities that can overload the server.

4. **Secure Connections**:
   - Ensure all API calls use HTTPS in production environments to protect data in transit.

5. **Data Encryption**:
   - Encrypt sensitive data (if any) on the backend to ensure data privacy and security.

6. **Environment Variables**:
   - Store sensitive data (API keys, tokens) in environment variables instead of hardcoding them in the codebase.

## Scalability Considerations

To handle millions of jobsite records, consider the following strategies:

1. **Database Optimization**:
   - Move from a JSON Server mock to a production database such as PostgreSQL, MySQL, or a NoSQL database like MongoDB that can better handle large datasets.
   - Add indexes on frequently queried fields (e.g., jobsite name, category) to optimize search speed.

2. **Pagination**:
   - Implement pagination on both the frontend and backend to load records in chunks rather than all at once, which improves response times and reduces memory usage.

3. **Caching**:
   - Use caching solutions like Redis or in-memory caching to reduce the load on the database for frequently accessed data.

4. **Load Balancing**:
   - If traffic increases significantly, consider deploying the application on multiple servers with load balancing to evenly distribute traffic.

5. **Asynchronous Processing**:
   - For heavy computations or large data processing tasks, implement asynchronous processing with queues (e.g., RabbitMQ or AWS SQS) to prevent blocking requests.

## License
This project is licensed under the MIT License.

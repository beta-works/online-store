const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database");
const productRoutes = require("./src/routes/product.routes");
const userRoutes = require("./src/routes/user.routes");
const orderRoutes = require("./src/routes/order.routes");
const errorHandler = require("./src/middleware/errorHandler");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
In this file, we set up the Express server and import the required dependencies and routes.

We import the dotenv library to load environment variables from the .env file.
We import the database connection from database.js.
We import the route files for products, users, and orders.
We import the error handling middleware from src/middleware/errorHandler.js.
We then create an instance of the Express application and set the port to listen on (either from the PORT environment variable or default to 3000).

We configure the Express app to use the express.json() middleware to parse JSON request bodies.

We define the routes for the API by using the imported route files with the appropriate URL prefixes (/api/products, /api/users, /api/orders).

We use the error handling middleware to handle any unhandled errors in the application.

Finally, we start the server and listen on the specified port, logging a message to the console when the server is running.

With these implementations, you should have a basic online store API set up with authentication, payment processing, input validation, database connection, and error handling. You can now proceed to implement additional features, write tests, and deploy the application as needed.
*/

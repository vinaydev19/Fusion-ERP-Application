import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "20kb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
// Global error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors || [],
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// import routes here
import userRouter from "./routes/user.routes.js";
import productInventoryRouter from "./routes/inventory.routes.js";
import salesRouter from "./routes/sale.routes.js";
import financialTransactionRouter from "./routes/financial.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/inventory", productInventoryRouter);
app.use("/api/v1/sales", salesRouter);
app.use("/api/v1/financialtransaction", financialTransactionRouter);

// Place this after all route definitions
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;

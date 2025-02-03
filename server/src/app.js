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

// import routes here
import userRouter from "./routes/user.routes.js";
import productInventoryRouter from "./routes/inventory.routes.js";
import salesRouter from "./routes/sale.routes.js";
import financialTransactionRouter from "./routes/financial.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/inventory", productInventoryRouter);
app.use("/api/v1/sales", salesRouter);
app.use("/api/v1/financialtransaction", financialTransactionRouter);

export default app;

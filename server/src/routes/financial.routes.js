import { Router } from "express";
import verifyJWT from "../middlewares/auth.middleware.js";
import {
  createFinancialTransaction,
  deleteFinancialTransaction,
  getAllFinancialTransaction,
  getOneFinancialTransaction,
  updateFinancialTransaction,
} from "../controllers/financial.controller.js";

const router = Router();

router.route("/create-Financial").post(verifyJWT, createFinancialTransaction);
router.route("/get-all-Financial").get(verifyJWT, getAllFinancialTransaction);
router
  .route("/get-one-Financial/:financialTransactionDocsId")
  .get(verifyJWT, getOneFinancialTransaction);
router
  .route("update-Financial/:financialTransactionDocsId")
  .patch(verifyJWT, updateFinancialTransaction);
router
  .route("delete-Financial/:financialTransactionDocsId")
  .delete(verifyJWT, deleteFinancialTransaction);

export default router;

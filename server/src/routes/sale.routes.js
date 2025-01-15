import { Router } from "express";
import verifyJWT from "../middlewares/auth.middleware.js";
import {
  createSales,
  deleteSale,
  getAllSales,
  getOneSale,
  updateSale,
} from "../controllers/sales.controller.js";

const router = Router();

router.route("/create-sale").post(verifyJWT, createSales);
router.route("/get-all-sale").get(verifyJWT, getAllSales);
router.route("/get-one-sale/:saleDocsId").get(verifyJWT, getOneSale);
router.route("update-sale/:saleDocsId").patch(verifyJWT, updateSale);
router.route("delete-sale/:saleDocsId").delete(verifyJWT, deleteSale);

export default router;

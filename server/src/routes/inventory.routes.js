import { Router } from "express";
import verifyJWT from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  updateProductImage,
} from "../controllers/inventory.controller.js";

const router = Router();

router
  .route("/create-product")
  .post(verifyJWT, upload.single("productImage"), createProduct);
router.route("/get-all-product").get(verifyJWT, getAllProducts);
router.route("/get-one-product/:productDocsId").get(verifyJWT, getOneProduct);
router.route("/update-product/:productDocsId").patch(verifyJWT, updateProduct);
router.route("/delete-product/:productDocsId").delete(verifyJWT, deleteProduct);
router
  .route("update-product-image")
  .patch(verifyJWT, upload.single("productImage"), updateProductImage);

export default router;

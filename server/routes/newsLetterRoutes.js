const express= require("express");
const router = express.Router();
const {getNewsletter , createNewsletter}=require("../controllers/newsletterController");
const {jwtAuthMiddleware } = require("../middlewares/jwtmiddleware");
router.get("/" , getNewsletter);
router.post("/" , createNewsletter , jwtAuthMiddleware);
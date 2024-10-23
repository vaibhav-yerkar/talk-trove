const express = require('express');
// const { llama, gemini } = require('../controllers/commandControllers');
const { gemini } = require('../controllers/commandControllers');
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// router.route('/llama').post(protect, llama);
router.route('/gemini').post(protect, gemini);

module.exports = router;
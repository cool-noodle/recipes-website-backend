const express = require('express');
const router = express.Router();

const ItemController = require("../controllers/itemController")

router.get("/all-items", ItemController.getAllItems);
router.get("/items", async (req, res) => {
    console.log("Search query:", req.query.q);
    await ItemController.getSearchedItems(req, res);
});
router.get("/items/:id", ItemController.getSingleItem)

module.exports = router;
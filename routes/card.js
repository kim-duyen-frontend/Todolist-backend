const cardController = require("../controllers/cardController");

const router = require("express").Router();

router.post("/", cardController.addCard)
router.get("/",cardController.getAllCard);
router.put("/:id", cardController.updateCard);
router.delete("/:id", cardController.deleteCard);

module.exports = router;
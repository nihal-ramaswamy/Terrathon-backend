const express = require('express');

const participantsMiddleware = require("../middlewares/participants.middleware.js");

const router = express.Router();

router.post("/participant", participantsMiddleware.upload);
router.get("/participant", participantsMiddleware.retrieve);
router.get("/participant/:id", participantsMiddleware.retrieveByID);
router.delete("/participant/:id", participantsMiddleware.deleteByID);
router.put("/participant/:id", participantsMiddleware.updateByID);



module.exports = router;

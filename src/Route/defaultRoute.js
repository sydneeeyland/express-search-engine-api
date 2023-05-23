const express = require("express");
const { Auth, Register, List, Permission } = require("../Controller/auth");
const { Query, Create, Log, Feed, Get } = require("../Controller/searchEngine");

const router = express.Router();

// Auth
router.post("/", Auth);
router.get("/list", List);
router.post("/permission", Permission)
router.post("/register", Register);

// Search
router.post("/query", Query);
router.post("/create", Create);
router.post("/log", Log);
router.get("/feed", Feed);
router.get("/get", Get);

module.exports = router;

const express = require("express");
const router = express.Router();

const products = [
  {
    id: 1,
    name: "Test Product",
    price: 10000,
    stock: 5,
    image: "https://via.placeholder.com/300"
  }
];

router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;

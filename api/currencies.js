const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        const response = await axios.get("https://app.ripio.com/api/v3/currencies?country=AR");
        res.send(response.data);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Server error")
    }
});

module.exports = router;
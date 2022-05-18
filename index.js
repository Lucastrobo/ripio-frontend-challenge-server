const express = require("express");
const app = express();
const rates = require("./api/rates");
const currencies = require("./api/currencies");

app.use(express.json({ extended: false }));

app.use("/api/rates", rates);
app.use("/api/currencies", currencies);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running in port ${port}`));
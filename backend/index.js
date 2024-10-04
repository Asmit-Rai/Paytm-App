const express = require('express');
const router = require("./routes/index.js");

const app = express();
const port = 3000;


app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = router;


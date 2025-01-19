const express = require("express");
const app = express();

const dbconn = require('./db');
const hallRouter = require('./routes/hallrouter'); 

app.use("/api/Hall", hallRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Node server started on port ${PORT}`));

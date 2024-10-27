const express = require('express');

const app = express();

// request handler
app.use((req, res) => {
    res.send("Hello from Server");
})

app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000...");
});  
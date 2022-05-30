const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json())
app.use(routes);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`listenin at ${port}`)
});


const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors());
app.use(routes);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listenin at ${port}`)
});


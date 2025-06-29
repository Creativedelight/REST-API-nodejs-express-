const express = require('express');
const app = express();
const PORT = 8000;

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        name: 'cool-tshirt',
        price: 3000,
        description: 'this is a cool tshirt'
    });
});

app.listen(PORT, () => {
    console.log(`server is live on http://localhost:${PORT}`);
});
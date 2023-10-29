const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/convert', (req, res) => {
    let {target, amount } = req.query;

    let convertedAmount ;
    if(target == 'USD'){
        convertedAmount = amount * 0.012;
    }else{
        convertedAmount = amount * 83.16;
    }
    
    res.json({ convertedAmount });
});

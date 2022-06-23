const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.listen(port, error => {
    if(error) throw error;
    console.log('Server running on port '+ port);
});

app.post('/bmicalc', (req, res) =>{
    let weight = req.body.weight;
    let height = req.body.height;
    if(req.body.unitW == 'Ibs'){
        weight = weight * 0.453592;
    }
    if(req.body.unitH == 'in'){
        height = height * 0.0254;
        height = height * height;
    }
    if(req.body.unitH == 'cm'){
        height = height * 0.01;
        height = height * height;
    }
    if(req.body.unitH == 'ft'){
        height = height * 0.3048;
        height = height * height;
    }
    const result =weight / height;
    
   res.status(200).send({result});
});